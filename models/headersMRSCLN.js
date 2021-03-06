/**
 * Created by thanh on 10/29/2014.
 */
module.exports = function (sequelize, DataTypes) {
    var headersMRSCLN = sequelize.define("headersMRSCLN", {
        "MRS_DF_ID": {type: DataTypes.INTEGER(11), primaryKey: true},
        "PATIENT_ID": {type: DataTypes.INTEGER(11), primaryKe: true},
        "CAL_ID": {type: DataTypes.INTEGER(11), primaryKey: true},
        "DF_CODE": DataTypes.STRING(10),
        "ITEM_ID": DataTypes.STRING(10),
        "DESCRIPTION": DataTypes.STRING(250),
        "ISENABLE": DataTypes.INTEGER(11),
        "Created_by": DataTypes.INTEGER(11),
        "Creation_date": DataTypes.DATE,
        "Last_updated_by": DataTypes.INTEGER(11),
        "Last_update_date": DataTypes.DATE,
        "practitioner": DataTypes.STRING(50),
        "practitionSign": DataTypes.BLOB,
        "practitionDate": DataTypes.DATE,
        "isReview": DataTypes.INTEGER(11)
    }, {
        tableName: 'cln_mrs_headers',
        createdAt: 'Creation_date',
        updatedAt: 'Last_update_date'
    });
    return headersMRSCLN;
};