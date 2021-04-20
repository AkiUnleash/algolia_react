import React, { useState } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import algoliasearch from 'algoliasearch'
import { browserHistory } from '../../history'

const Top: React.FC = () => {

  // Hooks状態管理
  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [rate, setRate] = useState('')
  const [price, setPrice] = useState('')

  // Algolia 初期設定
  const client = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID || "",
    process.env.ALGOLIA_ADMIN_API || "",
  );

  // インデックスの選択
  const index = client.initIndex(process.env.ALGOLIA_INDEX || "");

  // クリック時の処理（保存）
  const algolia_save = () => {
    index.saveObjects([{
      itemName: itemName,
      category: category,
      rate: rate,
      price: price
    }], { autoGenerateObjectIDIfNotExist: true })
    browserHistory.push('/')
  }

  return (
    <>
      <Header />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={7}>
          <TextField
            id="outlined-helperText"
            label="Title"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setItemName(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="outlined-helperText"
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setCategory(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="outlined-helperText"
            label="Rate"
            variant="outlined"
            fullWidth
            value={rate}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setRate(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="outlined-helperText"
            label="Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setPrice(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              algolia_save()
            }}
          > 保存 </Button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Top;