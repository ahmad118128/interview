import React, { useState } from 'react';
import Image from 'next/image';
import {
  StyledCaption,
  StyledDeleteButton,
  StyledTypographyBody1,
  StyledUploadedDescription,
  StyledUploadedImageBox,
  StyledUploadedImageDescriptionBox,
  StyledUploaderInput,
  StyleledUploaderWrapper,
} from './styled';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
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
      <StyledTypographyBody1 variant="body1">
        فایل را بکشید و رها کنید یا کلیک کنید(آپلود تصاویر الزامی است)
      </StyledTypographyBody1>
      <StyledCaption variant="caption">
        حداکثر حجم فایل (250 مگابایت)
      </StyledCaption>

      <Grid
        flexDirection="row-reverse"
        container
        spacing={8}
        sx={{ width: '100%' }}
      >
        {images.map((image, index) => (
          <Grid item key={index} xs={3}>
            <StyledUploadedImageBox dir="ltr">
              <Image
                src={URL.createObjectURL(image)}
                alt={`Preview ${image.name}`}
                width={32}
                height={32}
              />
              <StyledUploadedImageDescriptionBox>
                <StyledUploadedDescription variant="caption">
                  {image.name}
                </StyledUploadedDescription>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <StyledUploadedDescription variant="caption">
                    {image.size}KB-{image.lastModified}
                  </StyledUploadedDescription>
                  <StyledDeleteButton>
                    <Icon
                      onClick={() => handleDeleteImage(index)}
                      icon="streamline:delete-1"
                      width="16"
                      height="16"
                    />
                  </StyledDeleteButton>
                </Box>
              </StyledUploadedImageDescriptionBox>
            </StyledUploadedImageBox>
          </Grid>
        ))}
      </Grid>
    </StyleledUploaderWrapper>
  );
};

export default DragAndDropUpload;
