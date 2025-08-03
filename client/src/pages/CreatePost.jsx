import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id || e.target.name]: e.target.value });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }

      setImageUploadError(null);
      setImageUploadProgress(0);

      const formDataCloud = new FormData();
      formDataCloud.append('file', file);
      formDataCloud.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formDataCloud,
        }
      );

      const data = await res.json();

      if (!data.secure_url) {
        throw new Error('Upload failed');
      }

      setFormData((prev) => ({ ...prev, image: data.secure_url }));
      setImageUploadProgress(null);
    } catch (error) {
      console.log(error);
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
            onChange={handleChange}
            value={formData.title}
          />
          <Select
            name='category'
            onChange={handleChange}
            value={formData.category}
            required
          >
            <option value=''>Select a category</option>
            <option value='travel'>Travel</option>
            <option value='education'>Education</option>
            <option value='finance'>Finance</option>
            <option value='technology'>Technology</option>
          </Select>
        </div>

        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>

        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}

        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}

        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          onChange={handleEditorChange}
          value={formData.content}
        />

        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
      </form>
    </div>
  );
}
