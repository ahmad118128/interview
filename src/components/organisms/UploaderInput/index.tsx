import React, { useState } from 'react';

const DragAndDropUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;

    setImages([...images, ...Array.from(files)]);
  };

  const handleDeleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{ height: '200px', border: '1px dashed #ccc' }}
    >
      <input
        type="file"
        name="test"
        id=""
        style={{ width: '100%', height: '100%' }}
        multiple
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files = Array.from(e.target.files || []);
          setImages([...images, ...files]);
        }}
      />

      {images.map((image, index) => (
        <div key={index}>
          <img
            src={URL.createObjectURL(image)}
            alt={`Preview ${image.name}`}
            style={{ maxWidth: '50px', maxHeight: '50px' }}
          />
          <span>
            {image.name} - {image.size} bytes
          </span>
          <button onClick={() => handleDeleteImage(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DragAndDropUpload;
