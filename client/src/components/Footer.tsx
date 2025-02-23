import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ mt: 4, py: 2, bgcolor: 'primary.main', textAlign: 'center' }}>
      <Typography variant="body1" color="white">
        © 2025 小林洋輝のポートフォリオ. All Rights Reserved.
      </Typography>
    </Box>
  )
}

export default Footer