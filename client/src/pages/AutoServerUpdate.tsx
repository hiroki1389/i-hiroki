import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Container, Grid, List, ListItem } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";

import titleImage from '../assets/autoServerUpdate/title.png';
import accountCreateImage from '../assets/autoServerUpdate/accountCreate.png';
import aliasTableImage from '../assets/autoServerUpdate/aliasTable.png';
import aliasUpdateImage from '../assets/autoServerUpdate/aliasUpdate.png';
import createFileImage from '../assets/autoServerUpdate/createdFile.png';
import forwardAddressImage from '../assets/autoServerUpdate/forwardAddress.png';

const AutoServerUpdate: React.FC = () => {
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
                        メールサーバ更新ファイル自動生成ツール
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom>
                        概要
                    </Typography>
                    <Typography variant="body1" paragraph>
                        研究室メールサーバの更新ファイルを自動生成してくれるツールを開発した．<br/>
                        これは，更新前後のエイリアス表の差分を取ることで，更新ファイルを自動生成している．
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom>
                        開発環境等
                    </Typography>
                    <Typography variant="body1" paragraph>開発期間: 1日</Typography>
                    <Typography variant="body1" paragraph>開発環境: Google Colaboratory</Typography>
                    <Typography variant="body1" paragraph>開発言語: Python</Typography>
                    <Typography variant="body1" paragraph>ステップ数: 約200行</Typography>

                    <Typography variant="h4" component="h2" gutterBottom>
                        詳細
                    </Typography>
                    <Typography variant="h6" component="strong" sx={{ display: 'block', mt: 2 }}>
                        開発背景
                    </Typography>
                    <Typography variant="body1" paragraph>
                        元々私の業務手順は以下のようになっていた．
                        <ol>
                            <li><strong>更新依頼の受領:</strong> エイリアス表管理者から更新依頼が届く．このとき，更新したい内容と更新後のエイリアス表がエクセルで送られる</li>
                            <li><strong>エイリアス表の確認:</strong> 送られてきたエイリアス表を確認し，必要な更新内容を把握</li>
                            <li><strong>更新ファイルの作成:</strong> 更新したい内容とエイリアス表をもとに，更新ファイルを手作業で作成</li>
                            <li><strong>更新ファイルの送信:</strong> 作成したCSVファイルをサーバ管理者に送信し，サーバへの反映を依頼</li>
                        </ol>
                        しかし，年度末など更新内容が多い際は，手順3に時間がかかってしまう他，度々ヒューマンエラーが発生しており，以下のような問題があった．<br/>
                        <ul>
                            <li>エイリアスに本来いない人を追加してしまう</li>
                            <li>エイリアスに本来いるべき人が追加されていない</li>
                            <li>更新ファイルがshift-jisで作られておらず，サーバエラーが起きる</li>

                        </ul>
                        したがって，これらの課題解決のため，手順2, 3の自動化ツールの作成を始めた．
                    </Typography>

                    <Typography variant="h6" component="strong" sx={{ display: 'block', mt: 2 }}>
                        開発過程
                    </Typography>
                    <ListItem>
                        <Typography variant="body1">
                            ・<strong>要件定義:</strong> 手作業でやっていることを文章として書き起こして，処理の流れを明確化した
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            ・<strong>コーディング:</strong> 要件定義を元に，Excelファイルの読み込み方を調べつつ作成した
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">
                            ・<strong>テスト:</strong> 過去の更新表を用いて，過去の更新ファイルと同一のものが出力されるか確認した
                        </Typography>
                    </ListItem>

                    <Typography variant="h6" component="h2" gutterBottom>
                        実装詳細
                    </Typography>
                    <Typography variant="body1" paragraph>
                        エイリアス表管理者から送られてくるエイリアス表の例を以下に示す．<br/>
                        この表を使って更新ファイルを生成すす．
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={aliasTableImage}
                                alt="Sony Pasori RC-S380"
                                sx={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 2,
                                marginBottom: 2,
                                maxWidth: '100%',
                                height: 'auto',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph>
                    それでは，エイリアス更新およびアカウント削除プログラムの出力例を以下に示す．<br/>
                    ここでは，先ほどのエイリアス表および更新前のエイリアス表を参照し，差分をとって変更箇所を検出することによって，エイリアスの転送先の更新ファイルやアカウント削除ファイルを計4つ自動生成している．
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={aliasUpdateImage}
                                alt="Sony Pasori RC-S380"
                                sx={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 2,
                                marginBottom: 2,
                                maxWidth: '100%',
                                height: 'auto',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph>
                        生成された更新ファイルの一例として以下のファイルを示す．<br/>
                        このファイルをサーバ管理者に送信することで，メールサーバの更新を依頼する．
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={forwardAddressImage}
                                alt="Sony Pasori RC-S380"
                                sx={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 2,
                                marginBottom: 2,
                                maxWidth: '100%',
                                height: 'auto',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph>
                        次に，アカウント生成プログラムの出力例を以下に示す．<br/>
                        ここでは，生成したいアカウント名などを入力すると，初期パスワードを自動でランダム生成し，作成に必要なファイルを4つ生成する．
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={accountCreateImage}
                                alt="Sony Pasori RC-S380"
                                sx={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 2,
                                marginBottom: 2,
                                maxWidth: '100%',
                                height: 'auto',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph>
                        生成されたアカウント作成ファイルの一つを例として以下に示す．<br/>
                        このファイルをサーバ管理者に送信することで，メールサーバの更新を依頼する．
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={createFileImage}
                                alt="Sony Pasori RC-S380"
                                sx={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 2,
                                marginBottom: 2,
                                maxWidth: '100%',
                                height: 'auto',
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" component="h2" gutterBottom>
                        ソースコード
                    </Typography>
                    <Tooltip title="GitHub リポジトリ">
                        <Button
                            component="a"
                            href="https://github.com/hiroki1389/autoServerUpdate"
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
                            auto_server_update
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

export default AutoServerUpdate;
