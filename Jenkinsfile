pipeline {
  environment {
    DOCKER_IMAGE_NAME = 'portfolio_nextjs'
    DOCKER_CREDS = credentials('Dockerhub')
  }
    agent {
      docker {
        image 'node:lts-alpine'
        args '-v /var/run/docker.sock:/var/run/docker.sock'           }
    } 
    stages {
      stage('Build'){
        steps{
          sh 'npm install'
        }
      }
      stage('Lint'){
        steps{
          sh 'npm run lint'
        }
      }
      stage('Build Docker Image'){
        agent any
        steps{
          script{
            sh 'docker build -t portfolio_nextjs .'
          }
        }
      }

      stage('Push Docker Image'){
        steps{
          script{
            withCredentials([usernamePassword(credentialsId: DOCKER_CREDS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
              sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
              sh 'docker push $DOCKER_IMAGE_NAME'
            }
          }
        }
      }
    }
}
