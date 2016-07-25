# gulp_example
gulp task runner example

<?xml version="1.0" encoding='UTF-8'?>
<!DOCTYPE service-builder PUBLIC "-//Liferay//DTD Service Builder 7.0.0//EN" "http://www.liferay.com/dtd/liferay-service-builder_7_0_0.dtd">

<service-builder package-path="org.activework.portalservice">
	<namespace>portalservice</namespace>
	
	<entity local-service="true" name="user" remote-service="true" uuid="true">
		<!-- PK fields -->
		<column name="userId" primary="true" type="Long" />
		<column name="name" type="String" />
		<column name="kana" type="String" />
		<column name="divisionId" type="Long" />
		<column name="age" type="Integer" />
		<column name="enrollment" type="Boolean" />
	</entity>
	
	<entity local-service="true" name="divison" remote-service="true">
		<!-- Finder methods -->
		<column name="divisionId" primary="true" type="Long" />
		<column name="divisionname" primary="true" type="Long" />
		<column name="division" primary="true" type="Long" />
		
	</entity>
</service-builder>
