/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select * from  avni where time = ?");
function procedure1(a) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [a]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}

/**************************************************************************/

var procedure3Statement = WL.Server.createSQLStatement("select * from  south where time = ?");
function procedure3(a) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure3Statement,
		parameters : [a]
	});
}

/**************************************************************************/

var procedure4Statement = WL.Server.createSQLStatement("select * from  quest where time = ?");
function procedure4(a) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure4Statement,
		parameters : [a]
	});
}

/**************************************************************************/

var procedure5Statement = WL.Server.createSQLStatement("select * from  city where time = ?");
function procedure5(a) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure5Statement,
		parameters : [a]
	});
}

/**************************************************************************/

var procedure6Statement = WL.Server.createSQLStatement("insert into avni values(?,?)");
function procedure6(a,b) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure6Statement,
		parameters : [a,b]
	});
}

/**************************************************************************/

var procedure7Statement = WL.Server.createSQLStatement("insert into south values(?,?)");
function procedure7(a,b) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure7Statement,
		parameters : [a,b]
	});
}

/**************************************************************************/

var procedure8Statement = WL.Server.createSQLStatement("insert into quest values(?,?)");
function procedure8(a,b) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure8Statement,
		parameters : [a,b]
	});
}

/**************************************************************************/

var procedure9Statement = WL.Server.createSQLStatement("insert into city values(?,?)");
function procedure9(a,b) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure9Statement,
		parameters : [a,b]
	});
}
