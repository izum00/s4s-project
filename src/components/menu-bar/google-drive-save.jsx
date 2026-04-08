import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Button from '../button/button.jsx';
import styles from './google-drive-save.css';

class GoogleDriveSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: localStorage.getItem('googleDriveAccessToken') || null,
            currentAccountEmail: localStorage.getItem('googleDriveAccountEmail') || null,
            currentAccountName: localStorage.getItem('googleDriveAccountName') || null,
            files: [],
            isLoading: false,
            isProcessing: false,
            newFileName: props.projectTitle || '無題',
            sharePermission: 'reader',
            selectedFileId: null,
            currentModal: null,
            emailPermissions: [{ email: '', role: 'reader' }],
            linkPermission: 'reader'
        };
    }

    componentDidMount() {
        if (this.state.accessToken) {
            this.fetchDriveFiles(this.state.accessToken);
        }
    }

    handleClick = () => {
        this.openMainModal();
    };

    async openMainModal() {
        if (this.state.isProcessing) return;
        
        // Get ScratchBlocks instance
        let ScratchBlocks = window.ScratchBlocks;

        const modal = await ScratchBlocks.customPrompt({
            title: "Googleドライブに保存",
            scrollable: true
        }, {
            content: { width: "700px", maxHeight: "80vh" }
        }, [
            { 
                name: "閉じる", 
                role: "close", 
                callback: () => {
                    if (this.state.currentModal) {
                        this.state.currentModal.remove();
                        this.setState({ currentModal: null });
                    }
                }
            }
        ]);

        this.setState({ currentModal: modal });
        
        // Create modal content
        const contentContainer = document.createElement('div');
        contentContainer.className = styles.modalContainer;
        
        // Render content
        this.renderMainModalContent(contentContainer);
        
        modal.appendChild(contentContainer);
    }

    renderMainModalContent(container) {
        container.innerHTML = '';
        
        if (!this.state.accessToken) {
            this.renderAuthSection(container);
        } else {
            this.renderAccountInfo(container);
            this.renderNewFileSection(container);
            this.renderFileList(container);
        }
    }

    renderAuthSection(container) {
        const section = document.createElement('div');
        section.className = styles.authSection;
        
        const text = document.createElement('p');
        text.textContent = 'Googleでログインして、プロジェクトを保存または更新します。';
        section.appendChild(text);
        
        const loginButton = document.createElement('button');
        loginButton.textContent = 'Googleでログイン';
        loginButton.className = styles.loginButton;
        loginButton.onclick = () => this.startGoogleLogin();
        if (this.state.isProcessing) loginButton.disabled = true;
        section.appendChild(loginButton);
        
        container.appendChild(section);
    }

    renderAccountInfo(container) {
        const section = document.createElement('div');
        section.className = styles.authSection;
        
        const accountInfo = document.createElement('div');
        accountInfo.className = styles.accountInfo;
        accountInfo.textContent = `ログイン中: ${this.state.currentAccountName || this.state.currentAccountEmail || 'Googleアカウント'}`;
        section.appendChild(accountInfo);
        
        const changeButton = document.createElement('button');
        changeButton.textContent = 'アカウントを変更';
        changeButton.className = styles.changeAccountButton;
        changeButton.onclick = () => this.handleChangeAccount();
        if (this.state.isProcessing) changeButton.disabled = true;
        section.appendChild(changeButton);
        
        container.appendChild(section);
    }

    renderNewFileSection(container) {
        const section = document.createElement('div');
        section.className = styles.newFileSection;
        
        const newFileButton = document.createElement('button');
        newFileButton.textContent = '新規保存';
        newFileButton.className = styles.newFileButton;
        newFileButton.onclick = () => this.openNewFileModal();
        if (this.state.isProcessing) newFileButton.disabled = true;
        section.appendChild(newFileButton);
        
        container.appendChild(section);
    }

    async openNewFileModal() {
        if (this.state.isProcessing) return;
        
        let ScratchBlocks = window.ScratchBlocks;

        const modal = await ScratchBlocks.customPrompt({
            title: "新規保存",
            scrollable: false
        }, {
            content: { width: "500px" }
        }, [
            { 
                name: "保存", 
                role: "ok", 
                callback: async () => {
                    const fileNameInput = modal.querySelector('.new-file-name-input');
                    const permissionSelect = modal.querySelector('.permission-select');
                    if (fileNameInput && fileNameInput.value.trim()) {
                        await this.handleNewFileSave(fileNameInput.value, permissionSelect.value);
                        modal.remove();
                        this.openMainModal(); // Refresh main modal
                    }
                }
            },
            { 
                name: "キャンセル", 
                role: "close", 
                callback: () => modal.remove()
            }
        ]);

        const contentContainer = document.createElement('div');
        contentContainer.className = styles.newFileModalContent;
        
        const inputGroup = document.createElement('div');
        inputGroup.className = styles.newFileInputGroup;
        
        const label = document.createElement('label');
        label.textContent = 'ファイル名: ';
        inputGroup.appendChild(label);
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.state.newFileName;
        input.className = 'new-file-name-input';
        input.placeholder = 'ファイル名を入力';
        if (this.state.isProcessing) input.disabled = true;
        inputGroup.appendChild(input);
        
        const permissionGroup = document.createElement('div');
        permissionGroup.className = styles.permissionDropdown;
        
        const permLabel = document.createElement('label');
        permLabel.textContent = '公開設定: ';
        permissionGroup.appendChild(permLabel);
        
        const select = document.createElement('select');
        select.className = 'permission-select';
        const options = ['reader', 'writer', 'owner'];
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt === 'reader' ? '閲覧のみ' : opt === 'writer' ? '編集可能' : '所有者';
            select.appendChild(option);
        });
        permissionGroup.appendChild(select);
        
        contentContainer.appendChild(inputGroup);
        contentContainer.appendChild(permissionGroup);
        modal.appendChild(contentContainer);
    }

    renderFileList(container) {
        if (this.state.isLoading) {
            const loading = document.createElement('div');
            loading.className = styles.loading;
            loading.textContent = '読み込み中...';
            container.appendChild(loading);
            return;
        }

        const projectFiles = this.state.files.filter(file => file.mimeType === 'application/x-scratch');
        const thumbnailFiles = this.state.files.filter(file => file.mimeType === 'image/png');

        if (projectFiles.length === 0) {
            const noFiles = document.createElement('div');
            noFiles.className = styles.noFiles;
            noFiles.textContent = '保存されたファイルが見つかりません';
            container.appendChild(noFiles);
            return;
        }

        const fileListContainer = document.createElement('div');
        fileListContainer.className = styles.fileListContainer;
        
        const header = document.createElement('div');
        header.className = styles.fileListHeader;
        const title = document.createElement('h3');
        title.textContent = '保存済みプロジェクト';
        header.appendChild(title);
        fileListContainer.appendChild(header);
        
        const fileList = document.createElement('div');
        fileList.className = styles.fileList;
        
        projectFiles.forEach(project => {
            const fileItem = this.createFileItemElement(project, thumbnailFiles);
            fileList.appendChild(fileItem);
        });
        
        fileListContainer.appendChild(fileList);
        container.appendChild(fileListContainer);
    }

    createFileItemElement(project, thumbnailFiles) {
        const thumbnail = thumbnailFiles.find(
            thumb => thumb.name === `Scratch-Thumbnail-${project.id}.png`
        );
        
        const fileItem = document.createElement('div');
        fileItem.className = styles.fileItem;
        
        // Thumbnail
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = styles.thumbnailContainer;
        if (thumbnail) {
            const img = document.createElement('img');
            img.src = `https://drive.google.com/thumbnail?id=${thumbnail.id}&sz=w300`;
            img.alt = 'プロジェクトサムネイル';
            img.className = styles.thumbnail;
            thumbnailContainer.appendChild(img);
        } else {
            const placeholder = document.createElement('div');
            placeholder.className = styles.thumbnailPlaceholder;
            placeholder.textContent = 'サムネイルなし';
            thumbnailContainer.appendChild(placeholder);
        }
        fileItem.appendChild(thumbnailContainer);
        
        // File name
        const fileName = document.createElement('h3');
        fileName.className = styles.fileName;
        fileName.textContent = project.name.replace('.s4s.txt', '');
        fileItem.appendChild(fileName);
        
        // Link container
        const linkContainer = this.createLinkContainer(project.id);
        fileItem.appendChild(linkContainer);
        
        // Button group
        const buttonGroup = document.createElement('div');
        buttonGroup.className = styles.buttonGroup;
        
        const loadButton = this.createButton('読み込む', () => this.handleLoadFile(project));
        const replaceButton = this.createButton('上書き', () => this.handleReplaceFile(project));
        const shareButton = this.createButton('共有', () => this.openShareModal(project.id));
        const publicButton = this.createButton('公開', () => this.handleShareFile(project.id));
        const deleteButton = this.createButton('削除', () => this.handleDeleteFile(project, thumbnailFiles), styles.deleteButton);
        
        buttonGroup.appendChild(loadButton);
        buttonGroup.appendChild(replaceButton);
        buttonGroup.appendChild(shareButton);
        buttonGroup.appendChild(publicButton);
        buttonGroup.appendChild(deleteButton);
        
        fileItem.appendChild(buttonGroup);
        
        return fileItem;
    }

    createLinkContainer(fileId) {
        const SHORT_URL = "https://s4.rf.gd/";
        const container = document.createElement('div');
        container.className = styles.linkContainer;
        
        const linkHeader = document.createElement('div');
        linkHeader.className = styles.linkHeader;
        
        const copyLinkBtn = this.createButton('リンクをコピー', () => this.copyToClipboard(`${SHORT_URL}${fileId}`));
        const shortLinkBtn = this.createButton('リンクを短縮', () => window.open(`https://scratch-school.ct.ws/bit.php?id=${fileId}`));
        const copyIdBtn = this.createButton('IDのみコピー', () => this.copyToClipboard(fileId));
        
        linkHeader.appendChild(copyLinkBtn);
        linkHeader.appendChild(shortLinkBtn);
        linkHeader.appendChild(copyIdBtn);
        
        const linkUrl = document.createElement('a');
        linkUrl.href = `${SHORT_URL}${fileId}`;
        linkUrl.target = "_blank";
        linkUrl.rel = "noopener noreferrer";
        linkUrl.className = styles.linkUrl;
        linkUrl.textContent = `${SHORT_URL}${fileId}`;
        
        container.appendChild(linkHeader);
        container.appendChild(linkUrl);
        
        return container;
    }

    createButton(text, onClick, additionalClass = null) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = classNames(styles.actionButton, additionalClass);
        button.onclick = onClick;
        if (this.state.isProcessing) button.disabled = true;
        return button;
    }

    async openShareModal(fileId) {
        if (this.state.isProcessing) return;
        
        let ScratchBlocks = window.ScratchBlocks;
        const modal = await ScratchBlocks.customPrompt({
            title: "共有設定",
            scrollable: true
        }, {
            content: { width: "600px", maxHeight: "80vh" }
        }, [
            { 
                name: "適用", 
                role: "ok", 
                callback: async () => {
                    await this.applyPermissions(fileId);
                    modal.remove();
                }
            },
            { 
                name: "キャンセル", 
                role: "close", 
                callback: () => modal.remove()
            }
        ]);

        const contentContainer = document.createElement('div');
        contentContainer.className = styles.shareModalContent;
        
        // Email permissions section
        const emailSection = document.createElement('div');
        emailSection.className = styles.shareSection;
        const emailTitle = document.createElement('h3');
        emailTitle.textContent = 'ユーザーごとの共有';
        emailSection.appendChild(emailTitle);
        
        const emailList = document.createElement('div');
        emailList.className = styles.emailList;
        emailList.id = 'email-list';
        
        const addEmailBtn = document.createElement('button');
        addEmailBtn.textContent = '＋ メールアドレスを追加';
        addEmailBtn.className = styles.addButton;
        addEmailBtn.onclick = () => this.addEmailPermissionRow(emailList);
        
        emailSection.appendChild(emailList);
        emailSection.appendChild(addEmailBtn);
        
        // Link permission section
        const linkSection = document.createElement('div');
        linkSection.className = styles.shareSection;
        const linkTitle = document.createElement('h3');
        linkTitle.textContent = 'リンクを知っている全員';
        linkSection.appendChild(linkTitle);
        
        const linkSelect = document.createElement('select');
        linkSelect.className = styles.roleSelect;
        linkSelect.id = 'link-permission';
        ['reader', 'writer'].forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt === 'reader' ? '閲覧のみ' : '編集可能';
            linkSelect.appendChild(option);
        });
        linkSection.appendChild(linkSelect);
        
        contentContainer.appendChild(emailSection);
        contentContainer.appendChild(linkSection);
        modal.appendChild(contentContainer);
        
        // Add initial email row
        this.addEmailPermissionRow(emailList);
    }

    addEmailPermissionRow(container) {
        const row = document.createElement('div');
        row.className = styles.permissionRow;
        
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'メールアドレス';
        emailInput.className = styles.emailInput;
        
        const roleSelect = document.createElement('select');
        roleSelect.className = styles.roleSelect;
        ['reader', 'writer'].forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt === 'reader' ? '閲覧可能' : '編集可能';
            roleSelect.appendChild(option);
        });
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.className = styles.removeButton;
        removeBtn.onclick = () => row.remove();
        
        row.appendChild(emailInput);
        row.appendChild(roleSelect);
        row.appendChild(removeBtn);
        
        container.appendChild(row);
    }

    async applyPermissions(fileId) {
        this.setState({ isProcessing: true });
        try {
            const emailList = document.querySelector('#email-list');
            const linkPermission = document.querySelector('#link-permission')?.value || 'reader';
            
            // Apply email permissions
            const rows = emailList.querySelectorAll('.permissionRow');
            for (const row of rows) {
                const email = row.querySelector('input')?.value;
                const role = row.querySelector('select')?.value;
                if (email && email.trim()) {
                    await this.setFilePermission(fileId, this.state.accessToken, email.trim(), role);
                }
            }
            
            // Apply link permission
            await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.state.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "anyone",
                    role: linkPermission,
                }),
            });
            
            this.showAlert("success", "共有設定を適用しました");
        } catch (error) {
            console.error("権限設定エラー:", error);
            this.showAlert("error", "共有設定の適用に失敗しました");
        } finally {
            this.setState({ isProcessing: false });
        }
    }

    async setFilePermission(fileId, accessToken, email, role = "reader") {
        const response = await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "user",
                    role: role,
                    emailAddress: email
                }),
            }
        );
        
        if (!response.ok) {
            throw new Error(await response.text());
        }
        return await response.json();
    }

    startGoogleLogin = () => {
        if (this.state.isProcessing) return;
        
        localStorage.removeItem('googleDriveAccessToken');
        localStorage.removeItem('googleDriveAccountEmail');
        localStorage.removeItem('googleDriveAccountName');
        
        const CLIENT_ID = "169451419993-v1b3s315s8dkui950j2nm15hetr5i0qk.apps.googleusercontent.com";
        const REDIRECT_URI = "https://s-4-s-auth.hf.space/close2";
        const SCOPES = "https://www.googleapis.com/auth/drive.file";
        
        const messageListener = (event) => {
            if (event.data.token) {
                window.removeEventListener("message", messageListener);
                this.setState({
                    accessToken: event.data.token,
                    currentAccountEmail: event.data.email || null,
                    currentAccountName: event.data.name || null
                });
                
                localStorage.setItem('googleDriveAccessToken', event.data.token);
                if (event.data.email) localStorage.setItem('googleDriveAccountEmail', event.data.email);
                if (event.data.name) localStorage.setItem('googleDriveAccountName', event.data.name);
                
                this.fetchDriveFiles(event.data.token);
                if (this.state.currentModal) {
                    this.state.currentModal.remove();
                    this.setState({ currentModal: null });
                    this.openMainModal();
                }
            }
        };
        window.addEventListener("message", messageListener);
        
        const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
            `client_id=${CLIENT_ID}` +
            `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
            `&response_type=token` +
            `&scope=${encodeURIComponent(SCOPES)}`;
        
        window.open(authUrl, "_blank", "width=500,height=600");
    };
    
    fetchDriveFiles = async (accessToken) => {
        this.setState({ isLoading: true });
        try {
            const response = await fetch("https://www.googleapis.com/drive/v3/files?q=(mimeType='application/x-scratch' or mimeType='image/png')", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            
            if (!response.ok) {
                throw new Error(await response.text());
            }
            
            const data = await response.json();
            this.setState({ files: data.files || [], isLoading: false });
            
            // Refresh modal content if open
            if (this.state.currentModal) {
                const container = this.state.currentModal.querySelector('.modalContainer');
                if (container) {
                    this.renderMainModalContent(container);
                }
            }
        } catch (error) {
            console.error("ファイル一覧取得エラー:", error);
            this.showAlert("error", "ファイル一覧の取得に失敗しました");
            this.setState({ isLoading: false });
        }
    };
    
    showAlert = (type, message) => {
        if (this.props.showAlert) {
            this.props.showAlert(type, message);
        } else {
            alert(`${type}: ${message}`);
        }
    };
    
    handleChangeAccount = () => {
        if (this.state.isProcessing) return;
        
        this.setState({
            accessToken: null,
            currentAccountEmail: null,
            currentAccountName: null,
            files: []
        });
        localStorage.removeItem('googleDriveAccessToken');
        localStorage.removeItem('googleDriveAccountEmail');
        localStorage.removeItem('googleDriveAccountName');
        
        if (this.state.currentModal) {
            const container = this.state.currentModal.querySelector('.modalContainer');
            if (container) {
                this.renderMainModalContent(container);
            }
        }
    };
    
    handleNewFileSave = async (fileName, permission) => {
        this.setState({ isProcessing: true });
        try {
            await this.saveToGoogleDrive(null, `${fileName}.s4s.txt`, permission);
            this.showAlert("success", "新規保存しました");
            await this.fetchDriveFiles(this.state.accessToken);
        } catch (error) {
            console.error("新規保存エラー:", error);
            this.showAlert("error", "新規保存に失敗しました");
        } finally {
            this.setState({ isProcessing: false });
        }
    };
    
    handleLoadFile = (project) => {
        if (this.state.isProcessing) return;
        
        const PROXY_URL = "https://drive-proxy-s4s.vercel.app/?file_id=";
        
        if (confirm(`"${project.name}"を読み込みますか？現在のプロジェクトは失われます。`)) {
            const url = `${PROXY_URL}${project.id}`;
            window.location.href = `?project_url=${encodeURIComponent(url)}`;
        }
    };
    
    handleReplaceFile = async (project) => {
        if (this.state.isProcessing) return;
        
        if (confirm(`"${project.name}"を現在のプロジェクトで上書きしますか？`)) {
            this.setState({ isProcessing: true });
            try {
                await this.saveToGoogleDrive(project.id, project.name);
                this.showAlert("success", "上書き保存しました");
                await this.fetchDriveFiles(this.state.accessToken);
            } catch (error) {
                console.error("ファイル上書きエラー:", error);
                this.showAlert("error", "ファイルの上書きに失敗しました");
            } finally {
                this.setState({ isProcessing: false });
            }
        }
    };
    
    handleShareFile = async (fileId) => {
        if (this.state.isProcessing) return;
        
        this.setState({ isProcessing: true });
        try {
            await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.state.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "anyone",
                    role: "reader",
                }),
            });
            
            const SHARE_URL = "https://scratch-school.ct.ws/upload?id=";
            const shortUrl = `${SHARE_URL}${fileId}`;
            
            navigator.clipboard.writeText(shortUrl)
                .then(() => {
                    this.showAlert("success", "公開リンクをクリップボードにコピーしました");
                    window.open(shortUrl, "_blank");
                })
                .catch(() => {
                    this.showAlert("error", "リンクのコピーに失敗しました");
                });
        } catch (error) {
            console.error("公開エラー:", error);
            this.showAlert("error", "ファイルの公開に失敗しました");
        } finally {
            this.setState({ isProcessing: false });
        }
    };
    
    handleDeleteFile = async (project, thumbnailFiles) => {
        if (this.state.isProcessing) return;
        
        if (confirm(`"${project.name}"とそのサムネイルを完全に削除しますか？この操作は元に戻せません。`)) {
            this.setState({ isProcessing: true });
            try {
                await this.deleteFile(project.id);
                
                const thumbnailToDelete = thumbnailFiles.find(
                    thumb => thumb.name === `Scratch-Thumbnail-${project.id}.png`
                );
                
                if (thumbnailToDelete) {
                    await this.deleteFile(thumbnailToDelete.id);
                }
                
                this.showAlert("success", "ファイルを削除しました");
                await this.fetchDriveFiles(this.state.accessToken);
            } catch (error) {
                console.error("削除エラー:", error);
                this.showAlert("error", "ファイルの削除に失敗しました");
            } finally {
                this.setState({ isProcessing: false });
            }
        }
    };
    
    copyToClipboard = (text) => {
        if (this.state.isProcessing) return;
        
        navigator.clipboard.writeText(text)
            .then(() => this.showAlert("success", "リンクをクリップボードにコピーしました"))
            .catch(() => this.showAlert("error", "リンクのコピーに失敗しました"));
    };
    
    async deleteFile(fileId) {
        const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`,
            },
        });
        
        if (!response.ok) {
            throw new Error(await response.text());
        }
    }
    
    async saveToGoogleDrive(fileId, fileName, permission = 'reader') {
        if (!window.vm) {
            throw new Error("VMが初期化されていません");
        }
        
        const blob = await window.vm.saveProjectSb3();
        
        const metadata = {
            name: fileName,
            mimeType: "application/x-scratch",
        };
        
        const url = fileId 
            ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`
            : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";
        
        const form = new FormData();
        form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
        form.append("file", blob);
        
        const method = fileId ? "PATCH" : "POST";
        
        const uploadResponse = await fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`,
            },
            body: form,
        });
        
        if (!uploadResponse.ok) {
            throw new Error(await uploadResponse.text());
        }
        
        const fileData = await uploadResponse.json();
        
        try {
            const thumbnailDataUrl = await this.getProjectThumbnail();
            const thumbnailBlob = await (await fetch(thumbnailDataUrl)).blob();
            const thumbnailMetadata = {
                name: `Scratch-Thumbnail-${fileData.id}.png`,
                mimeType: "image/png",
            };
            
            const existingThumbnailResponse = await fetch(
                `https://www.googleapis.com/drive/v3/files?q=name='${thumbnailMetadata.name}'`,
                {
                    headers: {
                        Authorization: `Bearer ${this.state.accessToken}`,
                    },
                }
            );
            
            const existingThumbnailData = await existingThumbnailResponse.json();
            const thumbnailFileId = existingThumbnailData.files?.[0]?.id;
            
            const thumbnailUrl = thumbnailFileId
                ? `https://www.googleapis.com/upload/drive/v3/files/${thumbnailFileId}?uploadType=multipart`
                : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";
            
            const thumbnailForm = new FormData();
            thumbnailForm.append("metadata", new Blob([JSON.stringify(thumbnailMetadata)], { type: "application/json" }));
            thumbnailForm.append("file", thumbnailBlob);
            
            const thumbnailMethod = thumbnailFileId ? "PATCH" : "POST";
            
            await fetch(thumbnailUrl, {
                method: thumbnailMethod,
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`,
                },
                body: thumbnailForm,
            });
        } catch (thumbnailError) {
            console.warn("サムネイルの保存に失敗しました:", thumbnailError);
        }
        
        if (!fileId) {
            await fetch(`https://www.googleapis.com/drive/v3/files/${fileData.id}/permissions`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    role: permission,
                    type: "anyone",
                }),
            });
        }
        
        return fileData;
    }
    
    getProjectThumbnail() {
        return new Promise((resolve) => {
            if (window.vm && window.vm.renderer && window.vm.renderer.requestSnapshot) {
                window.vm.renderer.requestSnapshot(uri => {
                    resolve(uri);
                });
            } else {
                resolve('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==');
            }
        });
    }
    
    render() {
        return (
            <Button
                className={classNames(
                    this.props.className,
                    styles.saveButton
                )}
                onClick={this.handleClick}
            >
                <FormattedMessage
                    defaultMessage="Googleドライブに保存"
                    description="Label for Google Drive save button"
                    id="google.drive.saveButton"
                />
            </Button>
        );
    }
}

GoogleDriveSave.propTypes = {
    className: PropTypes.string,
    showAlert: PropTypes.func.isRequired,
    projectTitle: PropTypes.string
};

const mapStateToProps = state => ({
    projectTitle: state.scratchGui.projectTitle
});

export default connect(mapStateToProps)(GoogleDriveSave);
