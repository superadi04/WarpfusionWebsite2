import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Pricing from './Pricing';
import Terms from './Terms';

function App() {
  const [navigation, setNavigation] = useState([
    { name: 'Explore', href: 'explore', current: true },
    { name: 'Playground', href: 'playground', current: false },
    { name: 'Gallery', href: 'gallery', current: false },
    { name: 'API Keys', href: 'apikeys', current: false },
    { name: 'Pricing', href: 'pricing', current: false },
    { name: 'Docs', href: 'https://docs.flushai.cloud/introduction', current: false },
  ]);

  const [modelID, setModelID] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [resolution, setResolution] = useState("");
  const [learningRate, setLearningRate] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [trainingSteps, setTrainingSteps] = useState("");
  const [model_name, setModelName] = useState("");
  const [base_model, setBaseModel] = useState("");
  const [urls, setUrls] = useState({});


  const handleModelDetails = (page, model_id, model_name, created_at, resolution, learning_rate, batch_size, training_steps, urls, base_model, is_gif) => {
    setModelID(model_id);
    setCreatedAt(created_at);
    setResolution(resolution);
    setLearningRate(learning_rate);
    setBatchSize(batch_size);
    setTrainingSteps(training_steps);
    setModelName(model_name);
    setUrls(urls);
    setBaseModel(base_model);
  }

  const products = [
    {
      id: "3D Cartoon",
      "model_name": "3D Cartoon",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Finished",
      "batch_size": null,
      title: '3D Cartoon',
      price: '3D Cartoon',
      imageSrc: '3D Cartoon.png',
      description: '3D Cartoon',
      link: '3D Cartoon'
    },
    {
      id: "Cartoon Anime",
      "model_name": "Cartoon Anime",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Finished",
      "batch_size": null,
      title: 'Cartoon Anime',
      price: 'Cartoon Anime',
      imageSrc: 'Cartoon Anime.png',
      description: 'Cartoon Anime',
      link: 'Cartoon Anime'
    },
    {
      id: "fusion",
      "model_name": "fusion",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Finished",
      "batch_size": null,
      title: 'fusion',
      price: 'fusion',
      imageSrc: 'fusion.png',
      description: 'fusion',
      link: 'fusion'
    },
    {
      id: "Japan Anime",
      "model_name": "Japan Anime",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Finished",
      "batch_size": null,
      title: 'Japan Anime',
      price: 'Japan Anime',
      imageSrc: 'Japan Anime.png',
      description: 'Japan Anime',
      link: 'Japan Anime'
    },
    {
      id: "realistic",
      "model_name": "realistic",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Finished",
      "batch_size": null,
      title: 'realistic',
      price: 'realistic',
      imageSrc: 'realistic.png',
      description: 'realistic',
      link: 'realistic'
    },
    {
      id: "toonyou",
      "model_name": "toonyou",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "toonyou",
      "batch_size": null,
      title: 'toonyou',
      price: 'toonyou',
      imageSrc: 'toonyou.png',
      description: 'toonyou',
      link: 'toonyou'
    },
    {
      id: "Pixar",
      "model_name": "Pixar",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Pixar",
      "batch_size": null,
      title: 'Pixar',
      price: 'Pixar',
      imageSrc: 'Pixar.png',
      description: 'Pixar',
      link: 'Pixar'
    },
    {
      id: "Paper Art",
      "model_name": "Paper Art",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Paper Art",
      "batch_size": null,
      title: 'Paper Art',
      price: 'Paper Art',
      imageSrc: 'Paper Art.jpeg',
      description: 'Paper Art',
      link: 'Paper Art'
    },
    {
      id: "Clay",
      "model_name": "Clay",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Clay",
      "batch_size": null,
      title: 'Clay',
      price: 'Clay',
      imageSrc: 'Clay.jpeg',
      description: 'Clay',
      link: 'Clay'
    },
    {
      id: "Lego",
      "model_name": "Lego",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Lego",
      "batch_size": null,
      title: 'Lego',
      price: 'Lego',
      imageSrc: 'Lego.png',
      description: 'Lego',
      link: 'Lego'
    },
    {
      id: "Pixel",
      "model_name": "Pixel",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Pixel",
      "batch_size": null,
      title: 'Pixel',
      price: 'Pixel',
      imageSrc: 'Pixel.png',
      description: 'Pixel',
      link: 'Pixel'
    },
  ]


  const [lastPartOfUrl, setLastPartOfUrl] = useState("");
  console.log(lastPartOfUrl)

  return (
    <Router>
      <Routes>
        <Route path = "/video-to-video" element={<Dashboard setUrls={setUrls} products={products} pageName={"Video-to-Video"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} startingModel={products[0]} setLastPartOfUrl={setLastPartOfUrl}/>} />
        <Route path = "/text-to-video" element={<Dashboard setUrls={setUrls} products={products} pageName={"Text-to-Video"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} startingModel={products[0]} setLastPartOfUrl={setLastPartOfUrl}/>} />
        <Route path = "/morph" element={<Dashboard setUrls={setUrls} products={products} pageName={"Morph"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} startingModel={products[0]} setLastPartOfUrl={setLastPartOfUrl}/>} />
        <Route path = "/image-to-video" element={<Dashboard setUrls={setUrls} products={products} pageName={"ImageToVideo"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} startingModel={products[0]} setLastPartOfUrl={setLastPartOfUrl}/>} />
        <Route path = "/signin" element={<SignIn lastPartOfUrl={lastPartOfUrl} />} />
        <Route path = "/pricing" element={<Dashboard setUrls={setUrls} products={products} pageName={"Pricing"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/faq" element={<Dashboard setUrls={setUrls} products={products} pageName={"FAQ"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/my-videos" element={<Dashboard setUrls={setUrls} products={products} pageName={"Gallery"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/create" element={<Dashboard setUrls={setUrls} products={products} pageName={"Create"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/explore" element={<Dashboard setUrls={setUrls} products={products} pageName={"Explore"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/details" element={<Dashboard setUrls={setUrls} products={products} pageName={"Model Details"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/apikeys" element={<Dashboard setUrls={setUrls} products={products} pageName={"API Keys"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/models/details" element={<Dashboard setUrls={setUrls} products={products} pageName={"Model Details"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails}/>} />
        <Route path = "/terms" element={<Terms/>} />
        <Route path = "/" element={<HomePage/>} />

        {products.map((product) => (
          <Route 
            path={`/playground/${product.link}`} 
            element={<Dashboard setUrls={setUrls} products={products} pageName={"Playground"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} startingModel={product} setLastPartOfUrl={setLastPartOfUrl}/>} 
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
