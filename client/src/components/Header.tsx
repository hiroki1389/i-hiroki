import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

import menuIcon from '../assets/icon.png';

const Header = () => {
  // HomePageのページ遷移
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  // 現在のページがHomePageかどうかを判別
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const headerHight = 128;

  const { t, i18n } = useTranslation('homePage');

  const handleLanguageChange = (event: any) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('language', selectedLang); // optional: persist language
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box onClick={handleClick} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src={menuIcon} alt="menu icon" style={{ width: 48, height: 48 }} />
          </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            i-hiroki
          </Typography>
        </Box>

        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          variant="standard"
          sx={{
            color: 'white',
            '& .MuiSvgIcon-root': { color: 'white' },
            position: 'absolute',
            right: '20px',
          }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ja">日本語</MenuItem>
        </Select>
      </Toolbar>

      {isHomePage && (
        <nav id="nav" style={{ backgroundColor: '#1976d2', padding: '10px 0', textAlign: 'center' }}>
          <ScrollLink to="intro" smooth={true} duration={500} offset={-headerHight}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '0 8px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('intro.title')}
            </Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-headerHight}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '0 8px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('projects.title')}
            </Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-headerHight}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '0 8px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('languages.title')}
            </Button>
          </ScrollLink>
          <ScrollLink to="career" smooth={true} duration={500} offset={-headerHight}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '0 8px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('career.title')}
            </Button>
          </ScrollLink>
          <ScrollLink to="qualifications" smooth={true} duration={500} offset={-headerHight}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '0 8px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('qualifications.title')}
            </Button>
          </ScrollLink>
          <ScrollLink to="externalLinks" smooth={true} duration={500} offset={-headerHight}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '0 8px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('externalLinks.title')}
            </Button>
          </ScrollLink>
        </nav>
      )}
    </AppBar>
  );
};

export default Header;