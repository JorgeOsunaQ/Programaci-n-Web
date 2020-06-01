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
const genres=require('./models/genres')(sequelize);
const mediatype=require('./models/media_types')(sequelize);
const artists=require('./models/artists')(sequelize);
const playlists=require('./models/playlists')(sequelize);
const track=require('./models/tracks')(sequelize);
const invoices=require('./models/invoices')(sequelize);
const invoice_items=require('./models/invoice_items')(sequelize);
const albums=require('./models/albums')(sequelize);
const customers=require('./models/customers')(sequelize);
const employees=require('./models/employees')(sequelize);

//Crear asociaciones entre las tablas
genres.hasMany(track,{ foreignKey: 'GenreId' ,as: "Genre"});
mediatype.hasMany(track,{ foreignKey: 'MediaTypeId',as: "MediaType"});
albums.hasMany(track,{foreignKey: 'AlbumId', as: 'Album'});
artists.hasMany(albums,{ foreignKey: 'ArtistId' });
invoices.hasMany(invoice_items,{foreignKey: 'InvoiceId', as: 'Invoice'});
track.hasMany(invoice_items,{foreignKey: 'TrackId', as: 'Track'});
customers.hasMany(invoices,{foreignKey: 'CustomerId', as: 'Customer'});
employees.hasMany(customers,{foreignKey: 'SupportRepId', as: 'Employee'});
employees.belongsTo(employees,{foreignKey: 'ReporsTo'});

playlists.belongsToMany(track,{ through:  'Playlist_Track', foreignKey:'PlaylistId'});
track.belongsToMany(playlists,{ through:  'Playlist_Track', foreignKey:'TrackId'});

//Sincronización de la base de datos con los modelos
sequelize.sync();

//Exportamos los modelos de la bd
module.exports={
    genres,
    mediatype,
    artists,
    playlists,
    track,
    invoices,
    invoice_items,
    albums,
    customers,
    employees
}