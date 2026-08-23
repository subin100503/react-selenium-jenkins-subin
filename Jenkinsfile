pipeline {
    agent any

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run React Application') {
            steps {
                bat 'start "" cmd /c "npm start"'
                powershell 'Start-Sleep -Seconds 20'
            }
        }

        stage('Run Selenium Test') {
            steps {
                bat 'node tests\\test.js'
            }
        }
    }

    post {
        always {
            echo 'Pipeline Completed'
        }

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}