import { Router } from 'express';
import facets from '../models/facets';

export default ({config, db}) => {
	let api = Router();

	// /api/facets/ returns list of facets
	api.get('/', (req, res) => {
		res.json(facets)
	});

	// /api/facets/:facetId returns the requrested facet
	api.get('/:facetId', (req, res) => {
		res.json({
			id: req.params.facetId,
			facet: facets[req.params.facetId]
		})
	});

	return api;
}
