@Library('VDHLib')
import es.securitasdirect.vdh.PodDefinition
def podDefinition = new PodDefinition(env.DOCKER_REGISTRY)
def podLabel = "qa-chrome-test-pod-${UUID.randomUUID().toString()}".take(63)

git_url = 'https://bitbucket.apps.verisure.com/scm/sqat/demo-sq.git'

pipeline {
  agent {
    kubernetes {
      label podLabel
        yaml podDefinition.getPodForImage("node", "sd-node-aws:10.16.3")
    }
  }

  stages {
    stage('Get Repo') {
      steps {
        script {
          git credentialsId: 'vdh_Bitbucket', url: git_url
        }
      }
    }
    stage('Install node requirements') {
      steps {
        container("node") {
          script {
            sh "apt-get update && apt-get install -y xvfb libnss3 libgtk-3-0 libxss1 libasound2"
            sh "npm ci --unsafe-perm=true --allow-root cypress"
          }
        }
      }
    }
    stage('Execution'){
      steps {
        container("node") {
          script {
            sh 'npm run app:serve & npm run e2e:run'
          }
        }
      }
    }
    stage('Report'){
      steps {
        container("node") {
          script {
            cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', jsonReportDirectory: 'test/reports/cucumber', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
          }
        }
      }
    }
  }
}