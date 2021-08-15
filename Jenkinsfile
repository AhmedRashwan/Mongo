pipeline {
  agent any
  stages {
    stage('Lint') {
      steps {
        echo 'Hello World '
        mail(subject: 'Pipeline Mailers', body: 'Welcome on CI', to: 'ahmed.rashwan2014@yahoo.com', from: 'Jenkins@wuilt.com')
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