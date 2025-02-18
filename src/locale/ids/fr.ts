import { Locale } from "..";

export const fr: Locale = {
  // Common words and texts:
  'Yes': `Oui`,
  'No': `Non`,
  'Cancel': `Annuler`,
  'Retry': `Réessayer`,
  'Continue': `Continue`,
  'directory': `Répertoire`,
  'shortcut': `raccourci`,
  'streamfile': `fichier`,
  'error': `erreur`,
  'errors': `erreurs`,
  'Size': `Taille`,
  'Modified': `Modifié`,
  'Owner': `Propriétaire`,
  'clearList': `$(trash) Effacer liste`,
  'clearedList': `Liste effacée.`,
  'currentLibrary': `(bibliothèque en cours)`,
  'duplicate': 'Dupliquer',
  'save': 'Enregistrer',
  'delete': 'Supprimer',
  'cancel': 'Annuler',
  'not.connected':'Non connecté à un IBM i',
  'text':'Texte',
  'lines':'Lignes',
  'changed':'Modification',
  'created':'Création',
  // Sandbox:
  'sandbox.input.user.title': `Nom d'utilisateur`,
  'sandbox.input.user.prompt': `Entrez le nom d'utilisateur pour {0}`,
  'sandbox.input.password.title': `Mot de passe`,
  'sandbox.input.password.prompt': `Entrez le mot de passe pour {0}@{1}`,
  'sandbox.failedToConnect.text': 'Échec de la connexion à {0} avec {1}',
  'sandbox.failedToConnect.title': `Échec de la connexion`,
  'sandbox.noPassword': `Connexion à {0} interrompue car aucun mot de passe n'a été fourni.`,
  'sandbox.alreadyConnected': `Cette instance de Visual Studio Code est déjà connectée à un serveur.`,
  'sandbox.connected.modal.title': `Merci d'essayer le bac à sable Code for IBM i!`,
  'sandbox.connected.modal.detail': `Vous êtes seul responsable de l'utilisation du bas à sable. Ne partagez pas d'informations à caractère sensible ou privé.`,
  'sandbox.noconnection.modal.title': `Aïe aïe aïe, le bac à sable est en panne!`,
  'sandbox.noconnection.modal.detail': `Désolé, le bac à sable est est hors-ligne pour le moment. Réessayez plus tard.`,
  // ConnectionBrowser:
  'connectionBrowser.connectTo.lastConnection': `Dernière connexion`,
  'connectionBrowser.connectTo.lastUsed': `Dernière utilisation: {0}`,
  'connectionBrowser.connectTo.title': `Dernières connexions IBM i`,
  'connectionBrowser.connectTo.error': `Utilisez l'Explorateur de Serveur pour sélectionner le serveur auquel se connecter.`,
  'connectionBrowser.deleteConnection.warning': `Êtes vous sûr de vouloir supprimer la connexion {0}?`,
  'connectionBrowser.ServerItem.tooltip': ` (précédente connexion)`,
  'connectionBrowser.ServerItem.title': `Se Connecter`,
  // helpView:
  'helpView.getStarted': `Pour commencer`,
  'helpView.officialForum': `Forum officiel`,
  'helpView.reviewIssues': `Voir les incidents`,
  'helpView.reportIssue': `Déclarer un incident`,
  // ifsBrowser:
  'ifsBrowser.changeWorkingDirectory.prompt': `Changer le répertoire courant`,
  'ifsBrowser.changeWorkingDirectory.message': `Répertoire courant changé pour {0}.`,
  'ifsBrowser.addIFSShortcut.prompt': `Chemin du répertoire IFS`,
  'ifsBrowser.addIFSShortcut.error': `{0} n'est pas un répertoire.`,
  'ifsBrowser.addIFSShortcut.errorMessage': `Erreur lors de la création du raccourci IFS! {0}`,
  'ifsBrowser.removeIFSShortcut.placeHolder': `Sélection du raccourci IFS à supprimer`,
  'ifsBrowser.createDirectory.prompt': `Chemin du nouveau répertoire`,
  'ifsBrowser.createDirectory.errorMessage': `Erreur à la créationdu répertoire! {0}`,
  'ifsBrowser.createStreamfile.prompt': `Nom du nouveau fichier`,
  'ifsBrowser.createStreamfile.infoMessage': `Création du fichier {0}.`,
  'ifsBrowser.createStreamfile.errorMessage': `Erreur lors de la création du fichier! {0}`,
  'ifsBrowser.uploadStreamfile.uploadedFiles': `Les fichiers ont été uploadés.`,
  'ifsBrowser.uploadStreamfile.errorMessage': `Erreur lors de l'upload des fichiers! {0}`,
  'ifsBrowser.uploadStreamfile.noFilesSelected': `Aucun fichier sélectionné.`,
  'ifsBrowser.deleteIFS.rootNotAllowed': `Impossible de supprimer la racine (/) depuis l'Explorateur IFS.`,
  'ifsBrowser.deleteIFS.warningMessage': `Êtes-vous sûr de vouloir suprimer {0}?`,
  'ifsBrowser.deleteIFS.deletionPrompt': `La suppression du répertoire est irréversible!\nEntrez \"{0}\" pour confirmer la suppression.`,
  'ifsBrowser.deleteIFS.deletionPrompt2': ` (Appuyer sur \'Escape\' pour annuler)`,
  'ifsBrowser.deleteIFS.infoMessage': `{0} supprimé.`,
  'ifsBrowser.deleteIFS.errorMessage': `Erreur lors de la suppression du fichier! {0}`,
  'ifsBrowser.deleteIFS.cancelled': `Suppression annulée.`,
  'ifsBrowser.deleteIFS.default.home.dir':'{0} était le répertoire de travail; c\'est désormais {1}.',
  'ifsBrowser.moveIFS.prompt': `Nouveau chemin`,
  'ifsBrowser.moveIFS.errorMessage': `Erreur lors du renommage/déplacement de {0}! {1}`,
  'ifsBrowser.moveIFS.renamed': `{0} a été renommé {1}.`,
  'ifsBrowser.moveIFS.moved': `{0} a été déplacé vers {1}.`,
  'ifsBrowser.copyIFS.prompt': `Nouveau chemin`,
  'ifsBrowser.copyIFS.infoMessage': `{0} a été copié vers {1}.`,
  'ifsBrowser.copyIFS.errorMessage': `Erreur lors de la copie de {0}! {1}`,
  'ifsBrowser.searchIFS.prompt': `Entrez le répertoire IFS où chercher`,
  'ifsBrowser.searchIFS.title': `Chercher dans un répertoire`,
  'ifsBrowser.searchIFS.previousSearches': `Recherches précédentes`,
  'ifsBrowser.searchIFS.placeholder': `Entrez un mot à chercher ou choisissez une recherche précédente.`,
  'ifsBrowser.searchIFS.placeholder2': `Entrez le mot à chercher.`,
  'ifsBrowser.searchIFS.title2': `Chercher dans {0}.`,
  'ifsBrowser.searchIFS.noGrep': `grep doit être installé sur le système distant pour la recherche sur l'IFS.`,
  'ifsBrowser.downloadStreamfile.infoMessage': `Le fichier a été téléchargé.`,
  'ifsBrowser.downloadStreamfile.errorMessage': `Erreur lors du téléchargement de {0}! {1}`,
  'ifsBrowser.getChildren.errorMessage': `Erreur lors du chargement des objets.`,
  'ifsBrowser.handleFileListErrors.errorMessage': `{0} {1} s'est produit lors du chargement des fichiers.`,
  'ifsBrowser.doSearchInStreamfiles.title': `Recherche`,
  'ifsBrowser.doSearchInStreamfiles.progressMessage': `'{0}' dans {1}.`,
  'ifsBrowser.doSearchInStreamfiles.noResults': `Aucun résultat trouvé pour '{0}' dans {1}.`,
  'ifsBrowser.doSearchInStreamfiles.errorMessage': `Erreur lors de la recherche de fichiers.`,
  // LibraryListView:
  'LibraryListView.changeCurrentLibrary.currentlyActive': `Active`,
  'LibraryListView.changeCurrentLibrary.recentlyUsed': `Utilisé récemment`,
  'LibraryListView.changeCurrentLibrary.placeholder': `Filtre ou nouvelle bibliothèque à utiliser comme bibliothèque en cours`,
  'LibraryListView.changeCurrentLibrary.title': `Changer la bibliothèque en cours`,
  'LibraryListView.changeCurrentLibrary.changedCurrent': `La bibliothèque en cours est maintenant {0}.`,
  'LibraryListView.changeCurrentLibrary.alreadyCurrent': `{0} est déjà la bibliothèque en cours.`,
  'LibraryListView.changeUserLibraryList.prompt': `Changement de la liste des bibliothèques (valeur spécial: '*reset')`,
  'LibraryListView.changeUserLibraryList.removedLibs': `Les bibliothèques suivantes ont été retirées de la liste des bibliothèques mise à jour car elles sont invalides: {0}`,
  'LibraryListView.addToLibraryList.prompt': `Bibliothèque à ajouter`,
  'LibraryListView.addToLibraryList.tooLong': `Le nom de bibliothèque est trop long.`,
  'LibraryListView.addToLibraryList.alreadyInList': `La bibliohtèque {0} est déjà dans la liste des bibliothèques.`,
  'LibraryListView.addToLibraryList.invalidLib': `La bibliohtèque {0} n'existe pas.`,
  'LibraryListView.addToLibraryList.addedLib': `La bibliohtèque {0} a été ajoutée à la liste des bibliothèques.`,
  'LibraryListView.addToLibraryList.removedLibs': `Les bibliothèques suivantes ont été retirées de la liste des bibliothèques mise à jour car elles sont invalides: {0}`,  
  'LibraryListView.removeFromLibraryList.removedLib': `La bibliohtèque {0} a été retirée de la liste des bibliothèques.`,
  'LibraryListView.cleanupLibraryList.removedLibs': `Les bibliothèques suivantes ont été retirées de la liste des bibliothèques mise à jour car elles sont invalides: {0}`,
  'LibraryListView.cleanupLibraryList.validated': `La liste des bibliothèques a été validée avec succès.`,
  // objectBrowser:
  'objectBrowser.deleteFilter.infoMessage': `Supprimer le filtre '{0}'?`,
  'objectBrowser.createMember.prompt': `Nom du nouveau membre source (membre.ext)`,
  'objectBrowser.createMember.progressTitle': `Creation du membre {0}...`,
  'objectBrowser.createMember.errorMessage': `Erreur lors de la creation du membre {0}: {1}`,
  'objectBrowser.copyMember.prompt': `Chemin pour la copie du membre source`,
  'objectBrowser.copyMember.errorMessage': `Impossible de copier un membre sur lui-même!`,
  'objectBrowser.copyMember.progressTitle': `Création du membre {0}...`,
  'objectBrowser.copyMember.overwrite': `Êtes-vous sûr de vouloir écraser le membre {0}?`,
  'objectBrowser.copyMember.errorMessage2': `Le membre {0} existe déjà!`,
  'objectBrowser.copyMember.errorMessage3': `Erreur lors de la création du membre {0}: {1}`,
  'objectBrowser.deleteMember.warningMessage': `Êtes-vous sûr de vouloir supprimer {0}?`,
  'objectBrowser.deleteMember.infoMessage': `Membre {0} supprimé.`,
  'objectBrowser.deleteMember.errorMessage': `Erreur lors de la suppression du membre! {0}`,
  'objectBrowser.updateMemberText.prompt': `Mise à jour du texte de {0}`,
  'objectBrowser.updateMemberText.errorMessage': `Erreur lors de la mise à jour du texte du membre! {0}`,
  'objectBrowser.renameMember.prompt': `Renommer {0}`,
  'objectBrowser.renameMember.errorMessage': `Erreur lors du renommage du membre! {0}`,
  'objectBrowser.renameMember.invalid.input': `Le nouveau nom du membre doit être différent de l'ancien`,
  'objectBrowser.uploadAndReplaceMemberAsFile.infoMessage': `Le membre a été uploadé.`,
  'objectBrowser.uploadAndReplaceMemberAsFile.errorMessage': `Erreur lors de l'upload du contenu du membre! {0}`,
  'objectBrowser.downloadMemberContent.infoMessage': `Le membre a été téléchargé.`,
  'objectBrowser.downloadMemberContent.errorMessage': `Erreur lors du téléchargement du membre! {0}`,
  'objectBrowser.searchSourceFile.prompt': `Entrez LIB/SPF/membre.ext pour chercher (membre.ext est optionnel et peut contenir des caractères génériques)`,
  'objectBrowser.searchSourceFile.title': `Rechercher dans un fichier source`,
  'objectBrowser.searchSourceFile.invalidForm': `Entrez une valeur de la forme LIB/SPF/membre.ext`,
  'objectBrowser.searchSourceFile.aspText': `(dans l'ASP {0})`,
  'objectBrowser.searchSourceFile.previousSearches': `Recherches précédentes`,
  'objectBrowser.searchSourceFile.placeholder': `Entrez un mot à chercher ou choisissez une recherche précédente.`,
  'objectBrowser.searchSourceFile.placeholder2': `Entrez le mot à chercher.`,
  'objectBrowser.searchSourceFile.title2': `Rechercher dans {0} {1}`,
  'objectBrowser.searchSourceFile.errorMessage': `Impossible de rechercher une liste avec *ALL.`,
  'objectBrowser.createFilter': `Créer un filtre`,
  'objectBrowser.createLibrary.prompt': `Nom de la nouvelle bibliothèque`,
  'objectBrowser.createLibrary.errorMessage': `Impossible de créer la bibliothèque "{0}": {1}`,
  'objectBrowser.createLibrary.infoMessage': `Voulez-vous ajouter la nouvelle bibliothèque à la liste des bibliothèques?`,
  'objectBrowser.createLibrary.errorMessage2': `Nom de bibliothèque trop long.`,
  'objectBrowser.createSourceFile.prompt': `Nom du nouveau fichier source`,
  'objectBrowser.createSourceFile.infoMessage': `Création du fichier source {0}.`,
  'objectBrowser.createSourceFile.errorMessage': `Erreur lors de la création du fichier source! {0}`,
  'objectBrowser.createSourceFile.errorMessage2': `Le nom du fichier source doit faire au maximum 10 caractères de long.`,
  'objectBrowser.changeObjectDesc.prompt': `Changer la description de l'objet pour {0}, *BLANK pour effacer la description`,
  'objectBrowser.changeObjectDesc.errorMessage': `La description de l'objet doit faire au maximum 50 caractères de long.`,
  'objectBrowser.changeObjectDesc.infoMessage': `La description de l'objet {0} {1} a été changée.`,
  'objectBrowser.changeObjectDesc.errorMessage2': `Erreur lors du changement de la description de {0}! {1}`,
  'objectBrowser.copyObject.prompt': `Duplication de l'objet vers une nouvelle bibliothèque/objet`,
  'objectBrowser.copyObject.errorMessage': `Chemin invalide: {0}. Utilisez le format LIB/OBJ`,
  'objectBrowser.copyObject.errorMessage2': `Le nom de la bibliothèque doit faire au maximum 10 caractères de long.`,
  'objectBrowser.copyObject.errorMessage3': `Le nom de l'objet doit faire au maximum 10 caractères de long.`,
  'objectBrowser.copyObject.infoMessage': `Objet {0} {1} copié vers {2}.`,
  'objectBrowser.copyObject.infoMessage2': `Objet {0} {1} copié vers {2}. Rafraîchissement de l'explorateur d'objet.`,
  'objectBrowser.copyObject.errorMessage4': `Erreur lors de la copie de l'objet {0}! {1}`,
  'objectBrowser.deleteObject.warningMessage': `Êtes-vous sûr de vouloir supprimer {0} {1}?`,
  'objectBrowser.deleteObject.infoMessage': `{0} {1} supprimé.`,
  'objectBrowser.deleteObject.errorMessage': `Erreur lors de la suppression de l'objet! {0}`,
  'objectBrowser.deleteObject.progress':`Suppression de l'objet {0} {1}...`,
  'objectBrowser.renameObject.prompt': `Renamer l'objet`,
  'objectBrowser.renameObject.errorMessage': `Le nom de l'objet doit faire au maximum 10 caractères de long.`,
  'objectBrowser.renameObject.infoMessage': `Objet {0} {1} renommé {2}.`,
  'objectBrowser.renameObject.progress': `Renommage de l'objet {0} {1} en {2}...`,
  'objectBrowser.renameObject.errorMessage2': `Erreur lors du renommage de l'objet {0}! {1}`,
  'objectBrowser.moveObject.prompt': `Déplacer l'objet`,
  'objectBrowser.moveObject.errorMessage': `Le nom de l'objet doit faire au maximum 10 caractères de long.`,
  'objectBrowser.moveObject.infoMessage': `Objet {0} {1} déplacé vers {2}.`,
  'objectBrowser.moveObject.infoMessage2': `Objet {0} {1} déplacé vers {2}. Rafraîchissement de l'explorateur d'objet.`,
  'objectBrowser.moveObject.errorMessage2': `Erreur lors du déplacement de l'objet {0}! {1}`,
  'objectBrowser.moveObject.progress': `Déplacement de l'objet {0} {1} vers {2}...`,
  'objectBrowser.doSearchInSourceFile.title': `Recherche`,
  'objectBrowser.doSearchInSourceFile.progressMessage': `Récupération de la liste des membres de {0}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage1': `'{0}' dans {1}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage2': `La recherche prend du temps car il y a {0} membres...mais elle continue!`,
  'objectBrowser.doSearchInSourceFile.searchMessage3': `Qu'est ce que '{0}' a de si spécial en fait?!`,
  'objectBrowser.doSearchInSourceFile.searchMessage4': `Les fouilles pour trouver '{0}' dans {1} continuent...⛏`,
  'objectBrowser.doSearchInSourceFile.searchMessage5': `Sinon ça va vous? Et si on se faisait un thé? 🍵`,
  'objectBrowser.doSearchInSourceFile.searchMessage6': `Bon...c'est vraiment long là! Espérons que vous allez trouver ce que vous cherchez! 🤞🏻`,
  'objectBrowser.doSearchInSourceFile.searchMessage7': `Qu'est ce qui est jaune et qui attend?`,
  'objectBrowser.doSearchInSourceFile.searchMessage8': `Mais...pourquoi il y a {0} membres dans ce fichier en fait?`,
  'objectBrowser.doSearchInSourceFile.searchMessage9': `'{0}' in {1}.`,
  'objectBrowser.doSearchInSourceFile.notFound': `Aucun résultat trouvé pour '{0}' dans {1}.`,
  'objectBrowser.doSearchInSourceFile.noMembers': `Aucun membre à rechercher.`,
  'objectBrowser.doSearchInSourceFile.errorMessage': `Erreur lors de la recherche de membres source: {0}`,
  // ProfilesView:
  'ProfilesView.saveConnectionProfile.prompt': `Nom du profil`,
  'ProfilesView.saveConnectionProfile.infoMessage': `Paramètres actuels sauvés sur le profil '{0}'.`,
  'ProfilesView.deleteConnectionProfile.warningMessage': `Êtes-vous sûr de vouloir supprimer le profil '{0}'?`,
  'ProfilesView.loadConnectionProfile.infoMessage': `Le profil en cours est '{0}'.`,
  'ProfilesView.loadCommandProfile.infoMessage': `Le profil en cours est '{0}'.`,
  'ProfilesView.loadCommandProfile.warningMessage': `Échec de la récupération de la liste des bibliothèque depuis la commande. Fonctionnalité non installée.`,
  'ProfilesView.loadCommandProfile.errorMessage': `Échec de la récupération de la liste des bibliothèque depuis la commande: {0}`,
  'ProfilesView.setToDefault.infoMessage': `Réinitialisation`,
  'ProfilesView.setToDefault.detail': `La liste des bibliothèques Utilisateur, le répertoire de travail et les variables personnalisées vont être réinitialisés.`,
  //Actions
  'actions.CURLIB': 'Bibliothèque en cours, modifiable depuis la Liste des Bibliothèques',
  'actions.USERNAME': `Nom d'utilisateur de la connexion`,
  'actions.HOME': `Home/répertoire de travail en cours, modifiable depuis l'Exporateur IFS`,
  'actions.HOST': `Nom d'hôte ou adresse IP de la connexion`,
  'actions.BUILDLIB': `Voir <code>&amp;CURLIB</code>`,
  'actions.LIBLC': `Liste des bilbiothèques, séparée par des virgules`,
  'actions.LIBLS': `Liste des bilbiothèques, séparée par des espaces`,
  'actions.OPENLIB': `Nom de la bibliothèque contenant le membre source (<code>&amp;OPENLIBL</code> pour le nom en minuscule)`,
  'actions.OPENSPF': `Nom du fichier source contenant le membre source (<code>&amp;OPENSPFL</code> pour le nom en minuscule)`,
  'actions.OPENMBR': `Nom du membre source (<code>&amp;OPENMBRL</code> pour le nom en minuscule)`,
  'actions.member.EXT': `Extension du membre source (<code>&amp;EXTL</code> pour le nom en minuscule)`,
  'actions.FULLPATH': `Chemin absolu du fichier sur le système distant`,
  'actions.RELATIVEPATH': `Chemin relatif du fichier depuis le répertoire home ou de travail`,
  'actions.PARENT': `Nom du répertoire parent du fichier`,
  'actions.BASENAME': `Nom du fichier avec son extension`,
  'actions.streamfile.NAME': `Nom du fichier (<code>&amp;NAMEL</code> pour le nom en minuscule)`,
  'actions.streamfile.EXT': `Extension du fichier (<code>&amp;EXTL</code> pour le nom en minuscule)`,
  'actions.LIBRARY': `Nom de la bibliothèque contenant l'objet (<code>&amp;LIBRARYL</code> pour le nom en minuscule)`,
  'actions.NAME': `Nom de l'objet (<code>&amp;NAMEL</code> pour le nom en minuscule)`,
  'actions.object.TYPE': `Type de l'objet (<code>&amp;TYPEL</code> pour le nom en minuscule)`,
  'actions.object.EXT': `Extension/attribut de l'objet (<code>&amp;EXTL</code> pour le nom en minuscule)`,
  'actions.mainMenu.workWithActions': `Maintenance des Actions`,
  'actions.mainMenu.createOrMaintain': `Créez ou éditez des Actions. Les Actions sont groupées par type.`,
  'actions.mainMenu.newAction': `Créer Action`,
  'actions.duplicate.select': `Sélectionnez l'action à dupliquer`,
  'actions.workAction.create.title': `Créer une action`,
  'actions.workAction.edit.title': `Édition de l'action "{0}"`,
  'actions.workAction.duplicate.title': `Duplication de l'action "{0}"`,
  'actions.workAction.name': `Nom de l'action`,
  'actions.workAction.command': `Commande(s) à exécuter`,
  'actions.workAction.command.description': `Les variables ci-dessous sont disponibles en fonction du Type sélectionné ci-après. Vous pouvez définir plusieurs commande; une par ligne. Chaque commande est exécutée dans son propre Job et n'a pas d'état.`,
  'actions.workAction.extensions': `Extensions`,
  'actions.workAction.extensions.description': `Liste d'extensions de membre/fichier ou de type/attribut d'objet, séparée par des virgules.`,
  'actions.workAction.types': `Type`,
  'actions.workAction.types.description': `Les types de fichier auxquels s'appliquent l'action.`,
  'actions.workAction.types.member': `Membre`,
  'actions.workAction.types.member.description': `Membres source du système de fichier QSYS`,
  'actions.workAction.types.streamfile': `Fichier`,
  'actions.workAction.types.streamfile.description': `Fichier stocké sur l'IFS`,
  'actions.workAction.types.object': `Objet`,
  'actions.workAction.types.object.description': `Objets du système de fichier QSYS`,
  'actions.workAction.types.file': `Fichier Local (Workspace)`,
  'actions.workAction.types.file.description': `Fichiers locaux du Workspace VS Code`,
  'actions.workAction.environment': `Environnement`,
  'actions.workAction.environment.description': `Environnement d'exécution des commandes de l'action.`,
  'actions.workAction.environment.ile': `ILE`,
  'actions.workAction.environment.ile.description': `Exécution en commande ILE`,
  'actions.workAction.environment.qsh': `QShell`,
  'actions.workAction.environment.qsh.description': `Exécution via QShell`,
  'actions.workAction.environment.pase': `PASE`,
  'actions.workAction.environment.pase.description': `Exécution via l'environnement PASE`,
  'actions.workAction.delete.confirm': `Êtes-vous sûr de vouloir supprimer l'action "{0}"?`,
  'actions.workAction.refresh':'Rafraîchissement',
  'actions.workAction.refresh.description':'Le niveau du navigateur devant être rafraîchi une fois l\'action exécutée',
  'actions.workAction.refresh.no':'Aucun',
  'actions.workAction.refresh.no.description':'Pas de rafraîchissement',
  'actions.workAction.refresh.parent':'Parent',
  'actions.workAction.refresh.parent.description':'Le conteneur parent est rafraîchi',
  'actions.workAction.refresh.filter':'Filtre',
  'actions.workAction.refresh.filter.description':'Le filtre parent est rafraîchi',
  'actions.workAction.refresh.browser':'Navigateur',
  'actions.workAction.refresh.browser.description':'Le navigateur est entièrement rafraîchi'
};