import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Container, Grid, List, ListItem } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";

import titleImage from '../assets/attendanceChecker/title.png';
import environmentImage from '../assets/attendanceChecker/test_environment.png';
import demoVideo from '../assets/attendanceChecker/demo.mov';

const AttendanceChecker: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
                <CardMedia
                    component="img"
                    image={titleImage}
                    alt="本プロジェクトを一枚で伝える画像"
                    sx={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 2,
                        marginBottom: 2,
                        maxWidth: '80%',
                        height: 'auto',
                    }}
                />
                <CardContent>
                    <Typography variant="h3" component="h1" gutterBottom align="center">
                        MTG出席管理システム
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom>
                        概要
                    </Typography>
                    <Typography variant="body1" paragraph>
                        出席管理表に出席，遅刻，欠席，公欠を記録し，Slackに通知を送るシステムを開発した．<br />
                        学生証（Felica）をスキャンした時刻から出席・遅刻を判定して記録する．<br />
                        例外として，公欠申請や学生証忘れなどによる出席申請を，Google Formからできるようになっている．
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom>
                        使用デバイス
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <Typography variant="body1" component="ul" sx={{ paddingLeft: 2 }}>
                            <li>Sony Pasori RC-S380: USBカードリーダ</li>
                            <li>MacBook Pro 2020 M1</li>
                            <li>立命館大学の学生証（Felica）</li>
                        </Typography>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={environmentImage}
                                alt="Sony Pasori RC-S380"
                                sx={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 2,
                                marginBottom: 2,
                                maxWidth: '60%',
                                height: 'auto',
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h4" component="h2" gutterBottom>
                        開発環境等
                    </Typography>
                    <Typography variant="body1" paragraph>開発期間: 2週間</Typography>
                    <Typography variant="body1" paragraph>開発環境: MacBook Pro 2020 M1, MacOS Sequoa 15.3</Typography>
                    <Typography variant="body1" paragraph>開発言語: Python, GAS (Google Apps Script)</Typography>
                    <Typography variant="body1" paragraph>
                        ステップ数:
                        <List>
                            <ListItem>Python: 190行</ListItem>
                            <ListItem>GAS (Google Apps Script): 202行</ListItem>
                        </List>
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom>
                        技術スタック
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>nfcpy: </strong>felicaの解析
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>google-auth: </strong>Google Cloudサービスへのアクセス
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>Slack API: </strong>Slack Botの作成
                    </Typography>
                    
                    <br />

                    <Typography variant="h4" component="h2" gutterBottom>
                        詳細
                    </Typography>
                    <Typography variant="h6" component="strong" sx={{ display: 'block', mt: 2 }}>
                        開発背景
                    </Typography>
                    <Typography variant="body1" paragraph>
                        研究室のMTG時に出欠管理をとって欲しいと教授から要望があった．<br/>
                        しかし，手動での出欠管理の場合，抜けが発生したり，改竄を見抜くことが困難であるという問題点が存在する．<br/>
                        そのため，本システムでは学生証を用いて自動で出欠管理を行い，Slackに通知しつつGoogle Cloudのサービスを使って書き込むことで抜けを防止し，改竄は編集履歴から分かるようになっている．
                    </Typography>

                    <Typography variant="h6" component="strong" sx={{ display: 'block', mt: 2 }}>
                        開発過程
                    </Typography>
                    <List sx={{ paddingLeft: 2 }}>
                        <ListItem>
                            <Typography variant="body1">
                                ・<strong>要件定義:</strong> 必要なデバイスや処理の流れを1週間ほどプロトタイプを作りながら洗い出した
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">
                                ・<strong>コーディング:</strong> 要件定義を元にSlack APIやgoogle-aouth, nfcpyを用いて出席管理ツールを作成
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">
                                ・<strong>テスト:</strong> 私や友人の学生証を用いてテストした．また，別のPCでもゼロから環境構築して動くことを確認
                            </Typography>
                        </ListItem>
                    </List>

                    <br />

                    <Typography variant="h6" component="h2" gutterBottom>
                        デモ動画
                    </Typography>
                    <CardMedia
                        component="video"
                        controls
                        src={demoVideo}
                        sx={{
                            marginTop: 2,
                            marginBottom: 2,
                            maxWidth: '60%',
                            height: 'auto',
                        }}
                    />

                    <Typography variant="h6" component="h2" gutterBottom>
                        ソースコード
                    </Typography>
                    <Tooltip title="GitHub リポジトリ">
                        <Button
                            component="a"
                            href="https://github.com/hiroki1389/attendance_checker"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            color="secondary"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                mt: 2,
                                width: 'fit-content',
                                px: 6,
                            }}
                            startIcon={<GitHubIcon />}
                        >
                            attendance_checker
                        </Button>
                    </Tooltip>

                    <Button component={Link} to="/" variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
                        トップページに戻る
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AttendanceChecker;
