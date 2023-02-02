pipeline {
  environment {
    DOCKER_IMAGE_NAME = 'portfolio_nextjs'
    DOCKER_CREDS = credentials('Dockerhub')
  }
    agent none 
    stages {
      stage('Install dependencies'){
        agent {
          docker {
            image 'node:lts-alpine'
          }
        }
        steps{
          echo 'Installing dependencies'
          sh 'npm install'
          echo 'Linitng'
          sh 'npm lint'
        }
      }
          stage('Build and Push Docker Image'){
        steps{
          script{
            // This step should not normally be used in your script. Consult the inline help for details.
            withDockerRegistry(credentialsId: 'Docker', url: 'https://index.docker.io/v1/') {
              sh label : '', script : 'docker build -t blackmouse572/next_portfolio:latest .'
              sh label : '', script : 'docker push blackmouse572/next_portfolio:latest'
            }
          }
        }
      }
    }
}
