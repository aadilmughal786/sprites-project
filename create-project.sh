#!/bin/bash

# Function to create the project folder and subdirectories
create_project_structure() {
    project_name="$1"
    mkdir "$project_name"
    mkdir "$project_name/scripts"
    mkdir "$project_name/styles"
    mkdir -p "$project_name/assets/image"
    touch "$project_name/main.html"
    touch "$project_name/scripts/script.js"
    touch "$project_name/styles/style.css"

    echo "Project '$project_name' created successfully!"
}

# Read project name from user input
read -p "Enter the project name: " project_name

# Call the function to create the project structure
create_project_structure "$project_name"
