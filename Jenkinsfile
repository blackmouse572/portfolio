pipline {
  environment {
    DOCKER_IMAGE_NAME = 'portfolio_nextjs'
    DOCKER_CREDS = credentials('dockerhub')
  }
    agent {
      docker {
        image 'node:lts-bullseye-slim'
        args '-p 3000:3000'
      }
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
      step('Build Docker Image'){
        steps{
          script{
            sh 'docker build -t $DOCKER_IMAGE_NAME .'
          }
        }
      }

      step('Push Docker Image'){
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
