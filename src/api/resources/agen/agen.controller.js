import Joi from 'joi';
import Agen from './agen.model';

export default {
    async create(req, res) {
        try {
            const schema = Joi.object().keys({
                no_agen: Joi.number().required(),
                nama_agen: Joi.string().required(),
                kode_jabatan: Joi.string().required(),
                no_agen_induk: Joi.number().required(),
                level_agen: Joi.number().integer().min(1).max(5).optional()
            });
            const { value, error } = Joi.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }
            const agen = await Agen.create(value);
            return res.json(agen);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async findAll(req, res) {
        try {
            const { page, perPage } = req.query;
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10
            }
            const agens = await Agen.paginate({}, options);
            return res.json(agens);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async findOne(req, res) {
        try {
            const { id } = req.params;
            const agen = await Agen.findById(id);
            if (!agen) {
                return res.status(404).json({ err: 'could not find agen' });
            }
            return res.json(agen);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const schema = Joi.object().keys({
                no_agen: Joi.number().required(),
                nama_agen: Joi.string().required(),
                kode_jabatan: Joi.string().required(),
                no_agen_induk: Joi.number().required(),
                level_agen: Joi.number().integer().min(1).max(5).optional()
            });

            const { value, error } = Joi.validate(req.body, schema);
            if (error && error.details) {
                return res.status(400).json(error);
            }

            const agen = await Agen.findOneAndUpdate({_id: id}, value, {new: true});
            if (!agen) {
                return res.status(404).json({ err: 'could not find agen' });
            }

            return res.json(agen);
        } catch(err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const agen = await Agen.findOneAndRemove({_id: id});
            if (!agen) {
                return res.status(404).json({ err: 'could not find agen' });
            }
            return res.json(agen);
        } catch(err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }
}