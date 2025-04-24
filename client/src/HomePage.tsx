import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Typography, IconButton, Grid, Button, Box, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { programmingLanguages, career, qualifications, projects, externalLinks } from './components/HirokiData';
import { styled } from '@mui/system';

import './styles.css';

// カスタムカードのスタイル
const CustomCard = styled(Card)({
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%', // 高さを100%に設定
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // 上下の余白を均等に
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
});

// カード内の内容が長くなる場合にスクロール可能にするスタイル
const CardContentWrapper = styled(CardContent)({
  overflow: 'hidden', // 内容がはみ出さないように
  flexGrow: 1, // コンテンツがカード内でフレキシブルに広がる
  display: 'flex',
  flexDirection: 'column',
});

const HomePage: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <main id="mainContent">
        {/* はじめにセクション */}
        <Paper sx={{ p: 3, mb: 4 }} id = "intro">
          <Typography variant="h4" gutterBottom>
            はじめに
          </Typography>
          <Typography variant="body1" paragraph>
            小林洋輝と申します．現在，立命館大学大学院情報理工学研究科に通っている2回生です．<br />
            大学では主にメタバースに関する研究を行っています．<br />
            このサイトでは，主に私が今までに作成した制作物について紹介しています．
          </Typography>
        </Paper>

        {/* 制作物一覧セクション */}
        <Typography variant="h4" gutterBottom id = "projects">
          制作物一覧
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard>
                <CardContentWrapper>
                  <Typography variant="h6" component="h3">{project.title}</Typography>
                  <Typography variant="body2" paragraph>{project.description}</Typography>
                  <Button component={RouterLink} to={project.link} variant="outlined" color="primary">
                    詳細を見る
                  </Button>
                </CardContentWrapper>
              </CustomCard>
            </Grid>
          ))}
        </Grid>

        {/* 使える言語一覧セクション */}
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }} id="skills">
          使える言語一覧
        </Typography>
        <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}>
          <TableContainer component={Paper} elevation={3} sx={{ maxWidth: '80%', marginLeft: 0, marginRight: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>言語名</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>使用歴</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>主な用途</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programmingLanguages.map((lang, index) => (
                  <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <TableCell>{lang.name}</TableCell>
                    <TableCell>{lang.experience}</TableCell>
                    <TableCell>{lang.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* 経歴セクション */}
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }} id="career">
          経歴
        </Typography>
        <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}>
          <TableContainer component={Paper} elevation={3} sx={{ maxWidth: '80%', marginLeft: 0, marginRight: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>年</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>月</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>学歴・職歴</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {career.map((row, index) => (
                  <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.month}</TableCell>
                    <TableCell>{row.event}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* 保有資格セクション */}
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }} id="qualifications">
          保有資格
        </Typography>
        <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}>
          <TableContainer component={Paper} elevation={3} sx={{ maxWidth: '80%', marginLeft: 0, marginRight: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>年</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>月</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>資格名</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {qualifications.map((row, index) => (
                  <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.month}</TableCell>
                    <TableCell>{row.event}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>


        {/* 外部リンクセクション */}
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }} id="externalLinks">
          外部リンク
        </Typography>
        <Grid container spacing={2}>
          {externalLinks.map((link, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <a href={link.url} target="_blank" style={{ textDecoration: 'none', display: 'block' }}>
                <CustomCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                      {link.name}
                    </Typography>
                    <IconButton color="primary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                      {link.icon}
                    </IconButton>
                  </CardContent>
                </CustomCard>
              </a>
            </Grid>
          ))}
        </Grid>

      </main>
    </Box>
  );
};

export default HomePage;