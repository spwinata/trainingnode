import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const agenSchema = new Schema({
    no_agen: {
        type: Number,
        required: [true, 'Agen harus memiliki nomer agen'],
        min: 10000,
        max: 99999
    },
    nama_agen: {
        type: String,
        required: [true, 'Agen harus menuliskan nama']
    },
    kode_jabatan: {
        type: String,
        required: [true, 'Agen harus mencatumkan jabatan']
    },
    no_agen_induk: {
        type: Number,
        required: [true, 'Agen harus menyertakan nomer agen induk'],
        min: 10000,
        max: 99999
    },
    level_agen: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    }
});
agenSchema.plugin(mongoosePaginate);

export default mongoose.model('agen', agenSchema);
