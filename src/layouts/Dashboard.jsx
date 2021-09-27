import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Columns width ={4}>
                        <Categories />
                    </Grid.Columns>
                    <Grid.Columns width ={12}>
                        <ProductList />
                    </Grid.Columns>
                </Grid.Row>
            </Grid>


        </div>
    )

}