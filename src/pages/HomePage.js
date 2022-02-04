import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/staticComponents/Header';
//import SideBar from '../components/staticComponents/SideBar';
import { useSelector } from 'react-redux';
import SelectedComponent from './SelectedComponent';
import DummyComponent from '../components/DummyComponent';
//import { useEffect, useRef } from 'react';
import CustomizedAccordions from '../components/staticComponents/DropDown';
//commenting for testing purpose



const HomePage = () => {// a constant component
	//useSelector() is a hook to extract data from state
	const component = useSelector((state) => state.componentChange.component);
	//const scrolllRef = useRef(null);
	
	
	return (
		<div>
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				<Grid item xs={12}>

					//imported properties
					<Header />
				</Grid>
				<Grid item xs={2}>
					<CustomizedAccordions />
				</Grid>
				<Grid item xs={10} md={12} l={12}>
					{component ? <SelectedComponent component={component} /> : <DummyComponent />}
				</Grid>
			</Grid>
		</div>
	);
};

export default HomePage;
