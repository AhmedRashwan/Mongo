pipeline {
  agent any
  stages {
    stage('Lint') {
      parallel {
        stage('Lint') {
          steps {
            echo 'Hello World '
          }
        }

        stage('Lint Step 1') {
          steps {
            echo 'Lint Step1 '
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'code .'
        sleep 10
        echo 'Build'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }

  }
}