import React, { useState } from 'react';
import Image from 'next/image';
import { StyledUploaderInput, StyleledUploaderWrapper } from './styled';
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
    <StyleledUploaderWrapper
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <StyledUploaderInput
        type="file"
        name="test"
        id=""
        multiple
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files = Array.from(e.target.files || []);
          setImages([...images, ...files]);
        }}
      ></StyledUploaderInput>

      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={URL.createObjectURL(image)}
            alt={`Preview ${image.name}`}
            width={50}
            height={50}
          />
          <span>
            {image.name} - {image.size} bytes
          </span>
          <button onClick={() => handleDeleteImage(index)}>Delete</button>
        </div>
      ))}
    </StyleledUploaderWrapper>
  );
};

export default DragAndDropUpload;
