import { TheoryTopic } from '@/types/theory';
import { oopTheory } from './oop';
import { pythonTheory } from './python';
import { javaTheory } from './java';
import { javascriptTheory } from './javascript';
import { reactTheory } from './react';
import { cTheory } from './c';
import { phpTheory } from './php';
import { typescriptTheory } from './typescript';
import { kotlinTheory } from './kotlin';
import { swiftTheory } from './swift';
import { goTheory } from './go';
import { rustTheory } from './rust';
import { rubyTheory } from './ruby';
import { nextjsTheory } from './nextjs';
import { fastapiTheory } from './fastapi';
import { dotnetTheory } from './dotnet';
import { terraformTheory } from './terraform';
import { adobeTheory } from './adobe';
import { canvaTheory } from './canva';
import { raspberryPiTheory } from './raspberry-pi';
import { wordpressTheory } from './wordpress';
import { mysqlTheory } from './mysql';
import { firebaseTheory } from './firebase';
import { angularTheory } from './angular';
import { vuejsTheory } from './vuejs';
import { springBootTheory } from './spring-boot';
import { sqlTheory } from './sql';
import { nodejsTheory } from './nodejs';
import { dsaTheory } from './dsa';
import { systemDesignTheory } from './system-design';
import { gitTheory } from './git';
import { mongodbTheory } from './mongodb';
import { expressTheory } from './express';
import { cppTheory } from './cpp';
import { dbmsTheory } from './dbms';
import { flaskTheory } from './flask';
import { restApiTheory } from './rest-api';
import { jwtTheory } from './jwt';
import { awsTheory } from './aws';
import { dockerTheory } from './docker';
import { nosqlTheory } from './nosql';
import { htmlCssTheory } from './html-css';
import { bashTheory } from './bash';
import { pandasTheory } from './pandas';
import { numpyTheory } from './numpy';
import { githubTheory } from './github';
import { linuxTheory } from './linux';
import { jupyterTheory } from './jupyter';
import { tensorflowTheory } from './tensorflow';
import { scikitLearnTheory } from './scikit-learn';
import { sdlcTheory } from './sdlc';
import { powerbiTheory } from './powerbi';
import { dataVizTheory } from './data-viz';
import { edaTheory } from './eda';
import { nlpTheory } from './nlp';
import { gitlabTheory } from './gitlab';
import { gitlabCiTheory } from './gitlab-ci';
import { azureTheory } from './azure';
import { gcloudTheory } from './gcloud';
import { oracleTheory } from './oracle';
import { testingLibraryTheory } from './testing-library';
import { arduinoTheory } from './arduino';
import { pytorchTheory } from './pytorch';
import { opencvTheory } from './opencv';
import { reactNativeTheory } from './react-native';
import { flutterTheory } from './flutter';
import { androidTheory } from './android';
import { metaTheory } from './meta';
import { matplotlibTheory } from './matplotlib';
import { anacondaTheory } from './anaconda';
import { kubernetesTheory } from './kubernetes';
import { jenkinsTheory } from './jenkins';
import { topics } from '@/data/quiz/topics';

// Import theory for all topics
const theoryData: Record<string, TheoryTopic> = {
  oop: oopTheory,
  c: cTheory,
  php: phpTheory,
  python: pythonTheory,
  java: javaTheory,
  javascript: javascriptTheory,
  react: reactTheory,
  typescript: typescriptTheory,
  kotlin: kotlinTheory,
  swift: swiftTheory,
  go: goTheory,
  rust: rustTheory,
  ruby: rubyTheory,
  nextjs: nextjsTheory,
  fastapi: fastapiTheory,
  dotnet: dotnetTheory,
  terraform: terraformTheory,
  adobe: adobeTheory,
  canva: canvaTheory,
  'raspberry-pi': raspberryPiTheory,
  wordpress: wordpressTheory,
  mysql: mysqlTheory,
  firebase: firebaseTheory,
  angular: angularTheory,
  vuejs: vuejsTheory,
  'spring-boot': springBootTheory,
  sql: sqlTheory,
  nodejs: nodejsTheory,
  dsa: dsaTheory,
  'system-design': systemDesignTheory,
  git: gitTheory,
  mongodb: mongodbTheory,
  express: expressTheory,
  cpp: cppTheory,
  dbms: dbmsTheory,
  flask: flaskTheory,
  'rest-api': restApiTheory,
  jwt: jwtTheory,
  aws: awsTheory,
  docker: dockerTheory,
  nosql: nosqlTheory,
  'html-css': htmlCssTheory,
  bash: bashTheory,
  pandas: pandasTheory,
  numpy: numpyTheory,
  github: githubTheory,
  linux: linuxTheory,
  jupyter: jupyterTheory,
  tensorflow: tensorflowTheory,
  'scikit-learn': scikitLearnTheory,
  sdlc: sdlcTheory,
  powerbi: powerbiTheory,
  'data-viz': dataVizTheory,
  eda: edaTheory,
  nlp: nlpTheory,
  gitlab: gitlabTheory,
  'gitlab-ci': gitlabCiTheory,
  azure: azureTheory,
  gcloud: gcloudTheory,
  oracle: oracleTheory,
  'testing-library': testingLibraryTheory,
  arduino: arduinoTheory,
  pytorch: pytorchTheory,
  opencv: opencvTheory,
  'react-native': reactNativeTheory,
  flutter: flutterTheory,
  android: androidTheory,
  meta: metaTheory,
  matplotlib: matplotlibTheory,
  anaconda: anacondaTheory,
  kubernetes: kubernetesTheory,
  jenkins: jenkinsTheory,
};

export function getTheoryForTopic(topicId: string): TheoryTopic | null {
  return theoryData[topicId] || null;
}

export function getAllTheoryTopics(): TheoryTopic[] {
  return Object.values(theoryData);
}

// Generate placeholder theory for topics that don't have theory yet
export function getTheoryTopicsWithPlaceholders(): Array<TheoryTopic | { topicId: string; topicName: string; category: string; hasTheory: boolean }> {
  const result: Array<TheoryTopic | { topicId: string; topicName: string; category: string; hasTheory: boolean }> = [];
  
  topics.forEach(topic => {
    const theory = theoryData[topic.id];
    if (theory) {
      result.push(theory);
    } else {
      result.push({
        topicId: topic.id,
        topicName: topic.name,
        category: topic.category,
        hasTheory: false
      });
    }
  });
  
  return result;
}
