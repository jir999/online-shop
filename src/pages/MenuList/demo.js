<div className={classes.root}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <SearchBox  />
        </Grid>
        <Grid container spacing={3}>
            {restaurantsList.map((el) => (
                <Grid item xs={4}>
                    {<Menu className={classes.paper}
                                    photo={el.photoUrl} 
                                    id={el.id} 
                                    name={el.name} 
                                    price={el.price} />
                    }
                </Grid>
                ))}
        </Grid>
    </Grid>
</div>