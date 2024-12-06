# Command Descriptions for Setting Up a Git Repository

## GitHub CLI Command

```bash
gh repo create Learning-Git --private --source=. --remote=origin
```

This command uses the GitHub CLI (`gh`) to create a new private repository named `Learning-Git` on GitHub. It uses the current directory (`.`) as the source for the new repository and sets up a remote named `origin`. The repository is available at: https://github.com/madhurimarawat/Learning-Git.

## Git and Directory Setup Commands

```bash
mkdir Learning-Git
```

Creates a new directory named `Learning-Git`. This will be the local folder where the Git repository will be initialized.

```bash
cd Learning-Git
```

Changes the current working directory to `Learning-Git`, so you are inside the folder you just created.

```bash
git remote add origin https://github.com/username/Learning-Git.git
```

Adds a remote repository named `origin` that points to the URL `https://github.com/madhurimarawat/Learning-Git.git`. This remote repository will be the location where you can push and pull changes.

```bash
git branch -M main
```

Renames the current branch to `main`. The `-M` option forces the renaming even if a branch named `main` already exists.

```bash
git push -u origin main
```

Pushes the `main` branch to the remote repository `origin`. The `-u` option sets this remote branch as the default upstream branch for future push and pull commands.

```bash
git remote add origin https://github.com/madhurimarawat/Learning-Git.git
```

Attempts to add another remote repository named `origin` pointing to `https://github.com/madhurimarawat/Learning-Git.git`. However, this would result in an error if a remote named `origin` already exists.

# Note

The correct repository link is: https://github.com/madhurimarawat/Learning-Git
The folder name for this project should be `Learning-Git`.
