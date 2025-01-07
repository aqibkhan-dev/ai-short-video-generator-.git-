'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomLoding from './_components/CustomLoding'
import { v4 as uuidv4 } from 'uuid'

const VideoSCRIPT = [
  {
    imagePrompt:
      'A realistic, wide-angle shot of a bustling marketplace in ancient Alexandria, Egypt. Merchants in tunics are selling spices, fabrics, and pottery. The iconic Pharos Lighthouse is visible in the distance, piercing the bright blue sky. The scene should be filled with detail, showing the varied textures of the goods and the architecture.',
    contentText:
      'Imagine ancient Alexandria, a city buzzing with trade and life. The air thick with the smell of spices and the sound of bartering voices.'
  },
  {
    imagePrompt:
      'A close-up, realistic shot of a scholar, a slightly older man with a receding hairline, sitting at a wooden table in a dimly lit library. He is meticulously copying a text onto papyrus with a quill. The lighting is warm and inviting, with a few scrolls and books stacked on the table around him. The mood is studious and focused.',
    contentText:
      'Here, in the Great Library, scholars painstakingly preserved knowledge, copying scrolls by hand to share the wisdom of the ages.'
  }
]

function CreateNew () {
  const [formData, setFormData] = useState([])
  const [loading, setLoading] = useState(false)
  const [videoScript, setVideoScript] = useState()
  const [audioFile, setAudioFile] = useState()
  const [caption, setCaption] = useState()
  const [image, setImage] = useState()

  const onHanleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)

    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    // GetVideoScript();
    // GenerateAudioCaption();
    GenerateImage()
  }

  const GetVideoScript = async () => {
    setLoading(true)
    const prompt =
      'Write a script to generate ' +
      formData.duration +
      ' video on topic: ' +
      formData.topic +
      ' along with AI image prompt in ' +
      formData.imageStyle +
      ' for each scene and give me result in JSON format with imagePrompt and ContentText as field'
    console.log(prompt)
    const result = await axios
      .post('/api/get-video-script', {
        prompt: prompt
      })
      .then(resp => {
        setVideoScript(resp.data.result)
        GenerateAudioFile(resp.data.result)
      })
    setLoading(false)
  }

  const GenerateAudioFile = async videoScriptData => {
    let script = ''
    const id = uuidv4()
    videoScriptData.forEach(item => {
      script = script + item.ContentText + ' '
    })

    await axios
      .post('/api/generate-audio', {
        text: script,
        id: id
      })
      .then(resp => {
        setAudioFile(resp.data.result)
        console.log(resp.data)
      })
  }

  const GenerateAudioCaption = async fileUrl => {
    setLoading(true)
    await axios
      .post('/api/generate-caption', {
        audioFileUrl: fileUrl
      })
      .then(resp => {
        console.log(resp.data.result)
        setCaption(resp?.data?.result)
        GenerateImage()
      })
  }

  const GenerateImage = () => {
    let images = []
    VideoSCRIPT.forEach(async element => {
      await axios
        .post('/api/generate-image', {
          prompt: element?.imagePrompt
        })
        .then(resp => {
          console.log(resp.data.result)
          images.push(resp.data.result)
        })
    })
    console.log(images)
    setImage(images)
    setLoading(false)
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'>
        Create New
      </h2>

      <div className='mt-10 shadow-md p-10'>
        {/* {Select Topic} */}
        <SelectTopic onUserSelect={onHanleInputChange} />
        {/* {Select Style} */}
        <SelectStyle onUserSelect={onHanleInputChange} />
        {/* {Duration} */}
        <SelectDuration onUserSelect={onHanleInputChange} />
        {/* {Create Button} */}
        <Button className='mt-10 w-full' onClick={onCreateClickHandler}>
          Create Short Video
        </Button>
      </div>
      <CustomLoding loading={loading} />
    </div>
  )
}

export default CreateNew
