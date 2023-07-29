### Bash Script for Project Folder Creation

This Bash script allows you to create a project folder with a specific name and a pre-defined structure to organize your project files.

Open a terminal.

Make sure the Bash script has execute permissions. If not, give it execute permissions using the following command:

```bash
chmod +x create-project.sh
```

Run the script using the following command:

```bash
./create-project.sh
```

The script will prompt you to enter the project name. Provide a suitable name for your project.
The script will create a folder with the provided project name and set up the following structure inside the project folder:

```
your_project_name/
├── main.html
├── scripts/
|   └── script.js
├── styles/
|   └── style.css
└── assets/
    └── image/
```
