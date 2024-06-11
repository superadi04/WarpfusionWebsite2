import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import HomePage from './HomePage';
import Signin from './SignIn';
import Signup from './SignUp';
import Dashboard from './Dashboard';
import Pricing from './Pricing';
import Terms from './Terms';
import AppSumo from './AppSumo';

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

  let data2 = [
    // {
    //   "status": "Finished",
    //   "inference_id": "explore_videos",
    //   "prompt": "(ninja:1.3), claws, mask, bandana, dynamic pose, battle, shadow fight, (simple:0.2), pastel palette, illustration, intricate details, Figma, drrrible, Artstation, (smooth gradient), (light shadows), vibrant colors, high contrast",
    //   "style": "Studio Ghibli",
    //   "seed": 2144793638,
    //   "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_34.mp4"]
    // },
    {
      "status": "Finished",
      "inference_id": "explore_videos_1",
      "prompt": "michelangelo sculpture, muscular, man, contra pose, broken torso, vivid, marble veins, studio light, high quality, sokkel armor, shell shaded, concept art, glowing white eyes, god",
      "style": "Marble",
      "seed": 1065951602,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_23.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_2",
      "prompt": "white marble statue, cracked, fractural, fragments, rope, glowing red eyes, chained, Alberto Seveso, realistic, photorealistic, masterpiece, best quality, muscular",
      "style": "Marble",
      "seed": 1149294716,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_24.mp4"]
    },
    // {
    //   "status": "Finished",
    //   "inference_id": "explore_videos",
    //   "prompt": "wu kong, league of legends, futuristic, soldier, helmet, mechanical limbs, armor plates, weapons, armed, battle, Wu Kong",
    //   "style": "Studio Ghibli",
    //   "seed": 9059351,
    //   "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_25.mp4"]
    // },
    {
      "status": "Finished",
      "inference_id": "explore_videos_3",
      "prompt": "necromancer, hooded, black assassin, glowing red eyes, armor, realistic, undead, skeletons, 3d render, dark, dungeon, diablo, scary, horror",
      "style": "Mecha",
      "seed": 4219702030,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_26.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_4",
      "prompt": "white marble statue, cracked, fractural, fragments, chained, Alberto Seveso, realistic, photorealistic, masterpiece, best quality, muscular, dark background, king, with a crown",
      "style": "Marble",
      "seed": 3947275629,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_28.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_5",
      "prompt": "statue made of marble, renaissance, white marble skin, bodybuilder, veins, shredded, giant, in the stage, shirtless, from behind, facing away from viewer, muscular",
      "style": "Marble",
      "seed": 4058167450,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_30.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_6",
      "prompt": "made of marble, renaissance, white marble skin, bodybuilder, veins, shredded, giant, in the stage, shirtless",
      "style": "Marble",
      "seed": 1230818659,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_31.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_7",
      "prompt": "cinematic closeup Sub-Zero squaring off in the Netherrealm, their powers of fire and ice crackling, ready for a legendary battle, extreme details, volumetric lighting, cinematic scene, full focus, 16k, UHD, HDR",
      "style": "Studio Ghibli",
      "seed": 836124052,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_66.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_8",
      "prompt": "cinematic closeup, fiery, their powers of fire and power crackling, ready for a legendary battle, extreme details, volumetric lighting, cinematic scene, full focus, 16k, UHD, HDR",
      "style": "Studio Ghibli",
      "seed": 3989607322,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_63.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_9",
      "prompt": "Greek god, godly, godlike, playing basketball, palace like court, playing inside golden palace, golden and white marble, Greek uniform on,",
      "style": "Marble",
      "seed": 3989607322,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_62.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_10",
      "prompt": "Greek god, godly, godlike, playing basketball, palace like court, playing inside golden palace, golden and white marble, Greek uniform on,",
      "style": "Marble",
      "seed": 1473327661,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_52.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_11",
      "prompt": "Greek god, godly, godlike, playing basketball, palace like court, playing inside golden palace, golden and white marble, Greek uniform on,",
      "style": "Marble",
      "seed": 140156448,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_47.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_12",
      "prompt": "subzero, fighting ufc, cold, ice, mortal kombat like, subzero from mortal kombat, ufc ice octagon, icy texture subzero hidden identity with mask,",
      "style": "Studio Ghibli",
      "seed": 2692503862,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_46.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_13",
      "prompt": "white, man, with, sun,fire, orange, armor, mwhelan, red hot, structure, orange fire, glowing",
      "style": "Studio Ghibli",
      "seed": 417539809,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_42.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_14",
      "prompt": "Prince of persia, jake gyllenhaal, muscular, sword on back, armor, desert, facing away from viewer, ancient morocco, high detail, hd",
      "style": "Studio Ghibli",
      "seed": 2141714314,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_41.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_15",
      "prompt": "Glowing red eyes, monster, muscular, dark scaly skin, necromancer, armored, dark, diablo",
      "style": "Studio Ghibli",
      "seed": 2960705882,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_40.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_16",
      "prompt": "deadpool with mask on, in front, black, full face mask, superhero, full body, armor, two swords on back, from behind, facing towards viewer, on a basketball court",
      "style": "Studio Ghibli",
      "seed": 2793999102,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_36.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_17",
      "prompt": "basketball player lego style, realistic,",
      "style": "Lego",
      "seed": 692281019,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_176.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_18",
      "prompt": "basketball player lego style, realistic,",
      "style": "Lego",
      "seed": 1313313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_179.mp4"]
    },
    {
      "status": "Finished",
      "inference_id": "explore_videos_19",
      "prompt": "basketball player lego style, realistic,",
      "style": "Lego",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_180.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_20",
      "prompt": "soccer player lego style, realistic,",
      "style": "Lego",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/abc7a237e654886ced44fd27baccc4d2f043e9d1ed68e69761ab4a1257d15999/video_1.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_21",
      "prompt": "morph",
      "style": "morph",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_79.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_22",
      "prompt": "morph",
      "style": "morph",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_75.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_23",
      "prompt": "morph",
      "style": "morph",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_51.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_24",
      "prompt": "morph",
      "style": "morph",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_43.mp4"]
    }, 
    {
      "status": "Finished",
      "inference_id": "explore_videos_25",
      "prompt": "morph",
      "style": "morph",
      "seed": 12341313,
      "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_67.mp4"]
    }, 
  ]

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
    {
      id: "Sketch Anime",
      "model_name": "Sketch Anime",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Sketch Anime",
      "batch_size": null,
      title: 'Sketch Anime',
      price: 'Sketch Anime',
      imageSrc: 'Sketch Anime.jpeg',
      description: 'Sketch Anime',
      link: 'Sketch Anime'
    },
    {
      id: "Anime Lineart",
      "model_name": "Anime Lineart",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Anime Lineart",
      "batch_size": null,
      title: 'Anime Lineart',
      price: 'Anime Lineart',
      imageSrc: 'Anime Lineart.jpeg',
      description: 'Anime Lineart',
      link: 'Anime Lineart'
    },
    {
      id: "Studio Ghibli",
      "model_name": "Studio Ghibli",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Studio Ghibli",
      "batch_size": null,
      title: 'Studio Ghibli',
      price: 'Studio Ghibli',
      imageSrc: 'Studio Ghibli.jpeg',
      description: 'Studio Ghibli',
      link: 'Studio Ghibli'
    },
    {
      id: "Stone",
      "model_name": "Stone",
      "base_model": "",
      "learning_rate": null,
      "resolution": null,
      "training_steps": null,
      "status": "Stone",
      "batch_size": null,
      title: 'Stone',
      price: 'Stone',
      imageSrc: 'Stone.jpeg',
      description: 'Stone',
      link: 'Stone'
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
        <Route path = "/motion-brush" element={<Dashboard setUrls={setUrls} products={products} pageName={"MotionBrush"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} startingModel={products[0]} setLastPartOfUrl={setLastPartOfUrl}/>} />
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/signin" element={<Signin />} />
        <Route path = "/appsumo" element={<AppSumo />} />
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
        {data2.map((item, index) => (
          <Route exact path={`/video/${item.inference_id}`} element={<Dashboard setUrls={setUrls} products={products} pageName={"VideoCard"} navigation={navigation} setNavigation={setNavigation} modelID={modelID} setModelID={setModelID} model_name={model_name} setModelName={setModelName} created_at={createdAt} setCreatedAt={setCreatedAt} resolution={resolution} setResolution={setResolution} learning_rate={learningRate} setLearningRate={setLearningRate} batch_size={batchSize} setBatchSize={setBatchSize} training_steps={trainingSteps} setTrainingSteps={setTrainingSteps} urls={urls} base_model={base_model} setBaseModel={setBaseModel} handleModelDetails={handleModelDetails} seed={item.seed} url={item.urls[0]} style={item.style} prompt={item.prompt} />} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
