import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { DataBankRoute } from '@/strings';
import { Box, Typography } from '@mui/material';

export default function AddGroupModalForm({ control, handleSubmit }: any) {
  const submitHandler = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <CustomInput
        control={control}
        name="phoneNumber"
        fullWidth
        label={DataBankRoute.phoneNumber}
      />
      <label>
        <Typography
          sx={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}
          variant="h4"
        >
          {DataBankRoute.information}
        </Typography>
      </label>
      <Box sx={{ marginBottom: '1.25rem' }}>
        <CustomTextArea
          control={control}
          name="texteara1"
          placeholder={DataBankRoute.infoDialog}
        />
      </Box>
    </form>
  );
}
