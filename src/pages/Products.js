import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Grid, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../components/_dashboard/products';
import {
  AppBugReports,
  AppItemOrders,
  AppSprayCycle,
  AppWaterSupply
} from '../components/_dashboard/app';
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Automation">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          자동화
        </Typography>
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Section 1 / Plant 1</Typography>
        </Box> */}
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={6}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AppBugReports />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AppSprayCycle />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AppWaterSupply />
          </Grid>
        </Grid>
        {/* <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
        <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
