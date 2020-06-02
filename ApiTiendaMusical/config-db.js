const Sequelize=require('sequelize')

const sequelize=new Sequelize({
    dialect: 'sqlite',
    storage: 'databaseMusicStore.sqlite'
});

sequelize
.authenticate()
.then(() => {
console.log('Conexión establecida correctamente.');
})
.catch(err => {
console.error('No se pudó conectar con la base de datos:', err);
});

//Obtenemos la información de los modelo de la bd
const genresModel=require('./models/genres')(sequelize);
const mediaTypeModel=require('./models/media_types')(sequelize);
const artistsModel=require('./models/artists')(sequelize);
const playlistsModel=require('./models/playlists')(sequelize);
const trackModel=require('./models/tracks')(sequelize);
const invoicesModel=require('./models/invoices')(sequelize);
const invoice_itemsModel=require('./models/invoice_items')(sequelize);
const albumsModel=require('./models/albums')(sequelize);
const customersModel=require('./models/customers')(sequelize);
const employeesModel=require('./models/employees')(sequelize);

//Crear asociaciones entre las tablas
genresModel.hasMany(trackModel,{ foreignKey: 'GenreId' ,as: "Genre"});
mediaTypeModel.hasMany(trackModel,{ foreignKey: 'mediaTypeModelId',as: "mediaTypeModel"});
albumsModel.hasMany(trackModel,{foreignKey: 'AlbumId', as: 'Album'});
artistsModel.hasMany(albumsModel,{ foreignKey: 'ArtistId' });
invoicesModel.hasMany(invoice_itemsModel,{foreignKey: 'InvoiceId', as: 'Invoice'});
trackModel.hasMany(invoice_itemsModel,{foreignKey: 'trackModelId', as: 'trackModel'});
customersModel.hasMany(invoicesModel,{foreignKey: 'CustomerId', as: 'Customer'});
employeesModel.hasMany(customersModel,{foreignKey: 'SupportRepId', as: 'Employee'});
employeesModel.belongsTo(employeesModel,{foreignKey: 'ReporsTo'});

playlistsModel.belongsToMany(trackModel,{ through:  'Playlist_trackModel', foreignKey:'PlaylistId'},{timestamps: false});
trackModel.belongsToMany(playlistsModel,{ through:  'Playlist_trackModel', foreignKey:'trackModelId'},{timestamps: false});

//Sincronización de la base de datos con los modelos
sequelize.sync();

//Exportamos los modelos de la bd
module.exports={
    genresModel,
    mediaTypeModel,
    artistsModel,
    playlistsModel,
    trackModel,
    invoicesModel,
    invoice_itemsModel,
    albumsModel,
    customersModel,
    employeesModel
}