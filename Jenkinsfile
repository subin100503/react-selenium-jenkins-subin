pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run React App') {
            steps {
                bat 'start /B npm start'
                bat 'timeout /t 20'
            }
        }

        stage('Run Selenium Test') {
            steps {
                bat 'node src\\tests\\test.js'
            }
        }
    }
}