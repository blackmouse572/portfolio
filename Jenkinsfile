pipeline {
  environment {
    DOCKER_IMAGE_NAME = 'portfolio_nextjs'
    DOCKER_CREDS = credentials('Dockerhub')
  }
    agent any
    stages {
      stage('Install dependencies'){
        steps{
          echo 'Installing dependencies'
          sh 'npm install'
          echo 'Linitng'
          sh 'npm lint'
        }
      }
      stage('Build Docker Image'){
        steps{
          script{
            def dockerImage = docker.build("blackmouse572/next_portfolio:latest")
          }
        }
      }

      stage('Push Docker Image'){
        steps{
          script{
            withCredentials([usernamePassword(credentialsId: DOCKER_CREDS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
              sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
              sh 'docker push blackmouse572/next_portfolio:latest'
            }
          }
        }
      }
    }
}
