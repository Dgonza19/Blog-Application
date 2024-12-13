import React, {useState, useRef} from 'react';

const PostForm = ({ addPost}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null)

    const manageSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || content.trim() === '') {
            alert('Por favor, completa ambos campos')
            return;
        }
        addPost({ title, content, image});
        setTitle('');
        setContent('');
        setImage(null);

        fileInputRef.current.value='';

    }
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };



    return(
        <form onSubmit={manageSubmit}>
            <input 
                type="text"
                placeholder='Titulo de la publicacion'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                 placeholder="Contenido de la publicacion" 
                 value={content}
                 onChange={(e) => setContent(e.target.value)}>
            </textarea>

            <input 
                type="file"
                accept='image/*'
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            {image && <img src={URL.createObjectURL(image)} alt="Previsualización" style={{ width: '100px', height: '100px' }}/>}
            <button type='submit'>Agregar Publicacion</button>
        </form>
    )
};

export default PostForm;