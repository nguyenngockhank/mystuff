module.exports = function (sequelize, DataTypes) {
    var WaWorkCoverProgress = sequelize.define('WaWorkCoverProgress', {
        progress_id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        cal_id: DataTypes.INTEGER(11),
        examDate: DataTypes.DATE,
        signature: DataTypes.TEXT,
        Created_by: DataTypes.INTEGER(11),
        Creation_date: DataTypes.DATE,
        Last_updated_by: DataTypes.INTEGER(11),
        Last_update_date: DataTypes.DATE,
        AssessmentName: DataTypes.STRING(50),
        injuryDate: DataTypes.DATE,
        diagnosis: DataTypes.STRING(200),
        activities_1: DataTypes.STRING(100),
        activities_2: DataTypes.STRING(100),
        activities_3: DataTypes.STRING(100),
        activities_4: DataTypes.STRING(100),
        activities_5: DataTypes.STRING(100),
        activities_6: DataTypes.STRING(100),
        outcome_1: DataTypes.STRING(200),
        outcome_2: DataTypes.STRING(200),
        outcome_3: DataTypes.STRING(200),
        outcome_4: DataTypes.STRING(200),
        outcome_5: DataTypes.STRING(200),
        outcome_6: DataTypes.STRING(200),
        isRequired_1: DataTypes.INTEGER(11),
        isRequired_2: DataTypes.INTEGER(11),
        isRequired_3: DataTypes.INTEGER(11),
        isRequired_4: DataTypes.INTEGER(11),
        isRequired_5: DataTypes.INTEGER(11),
        isRequired_6: DataTypes.INTEGER(11),
        isOtherFactor: DataTypes.INTEGER(11),
        progressCmt: DataTypes.STRING(200),
        usualDuties: DataTypes.STRING(100),
        isFullCapacity: DataTypes.INTEGER(11),
        fullCapaFrom: DataTypes.DATE,
        isRequireTreat: DataTypes.INTEGER(11),
        isSomeCapacity: DataTypes.INTEGER(11),
        someCapaFrom: DataTypes.DATE,
        someCapaTo: DataTypes.DATE,
        isPreDuties: DataTypes.INTEGER(11),
        isModiDuties: DataTypes.INTEGER(11),
        isWorkModifi: DataTypes.INTEGER(11),
        isPreHours: DataTypes.INTEGER(11),
        isModiHours: DataTypes.INTEGER(11),
        modiHrs: DataTypes.INTEGER(11),
        modiDays: DataTypes.INTEGER(11),
        isNoCapacity: DataTypes.INTEGER(11),
        noCapaFrom: DataTypes.DATE,
        noCapaTo: DataTypes.DATE,
        isLiftUp: DataTypes.INTEGER(11),
        liftUpKg: DataTypes.INTEGER(11),
        isSitUp: DataTypes.INTEGER(11),
        sitUpMins: DataTypes.INTEGER(11),
        isStandUp: DataTypes.INTEGER(11),
        standUpMins: DataTypes.INTEGER(11),
        isWalkUp: DataTypes.INTEGER(11),
        walkUpMeter: DataTypes.INTEGER(11),
        isWorkBelow: DataTypes.INTEGER(11),
        capaCmt: DataTypes.STRING(500),
        activities_B1: DataTypes.STRING(100),
        activities_B2: DataTypes.STRING(100),
        activities_B3: DataTypes.STRING(100),
        activities_B4: DataTypes.STRING(100),
        activities_B5: DataTypes.STRING(100),
        activities_B6: DataTypes.STRING(100),
        goal_1: DataTypes.STRING(200),
        goal_2: DataTypes.STRING(200),
        goal_3: DataTypes.STRING(200),
        goal_4: DataTypes.STRING(200),
        goal_5: DataTypes.STRING(200),
        goal_6: DataTypes.STRING(200),
        isSupportRTW: DataTypes.INTEGER(11),
        supportDate: DataTypes.DATE,
        isMoreInfo: DataTypes.INTEGER(11),
        isInvolved: DataTypes.INTEGER(11),
        isEngage: DataTypes.INTEGER(11),
        engageDetail: DataTypes.STRING(100),
        isReview: DataTypes.INTEGER(11),
        reviewOn: DataTypes.DATE,
        reviewCmt: DataTypes.STRING(200),
    }, {
        tableName: 'th_progress_assessment',
        createdAt: 'Creation_date',
        updatedAt: 'Last_update_date'
    });

    return WaWorkCoverProgress;
}