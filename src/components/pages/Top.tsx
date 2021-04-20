import React, { useState } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import algoliasearch from 'algoliasearch'

const Top: React.FC = () => {

  // Hooks状態管理
  const [keyword, setKeyword] = useState('')
  const [result, setResult] = useState<any>([])

  // Algolia 初期設定
  const client = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID || "",
    process.env.ALGOLIA_SEARCH_ONLY_API || "",
  );

  // インデックスの選択
  const index = client.initIndex(process.env.ALGOLIA_INDEX || "");

  // クリック時の処理（検索）
  const algolia_search = (keyword: string) => {
    index.search(keyword).then(({ hits }) => {
      setResult(hits)
      console.log(hits);
    })
  }

  return (
    <>
      <Header />

      <Grid container alignItems="center" justify="center">
        <Grid item xs={3}>
          <TextField
            required
            id="filled-required"
            label="検索キーワード"
            variant="filled"
            value={keyword}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setKeyword(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              algolia_search(keyword)
            }}
          > 検索 </Button>
        </Grid>
        <Grid item xs={6} />
      </Grid>

      <MaterialTable
        columns={[
          { title: 'Title', field: 'itemName' },
          { title: 'Category', field: 'category' },
          { title: 'Rate', field: 'rate' },
          { title: 'Price', field: 'price' },
        ]}
        data={result}
        options={{
          filtering: false,
          search: false,
          draggable: false,
          toolbar: false,
          showTitle: false,
        }}
      />

      <Footer />
    </>
  );
};
export default Top;