var data = d3.csv("resources/results.csv", function(d) {
  return {
    Animal_Id: data['Animal ID'], 
  Name_intake: data.Name_intake,
  DateTime_intake: data.DateTime_intake,
  Found_Location: data.Found_Location,
  Intake_Type: data.Intake_Type,
  IntakeCondition: data.IntakeCondition,
  Animal_Type_intake: data.Animal_Type_intake,
  Sex_Intake: data.Sex_Intake,
  Color_intake: data.Color_intake,
  DateTime_outcome: data.DateTime_outcome,
  Outcome_Type: data.Outcome_Type,
  Sex_upon_Outcome: data.Sex_upon_Outcome,
  fixed_changed: data.fixed_changed,
  Age_Bucket: data.Age_Bucket,
  length_of_stay: data.length_of_stay,
  breed_type: data.breed_type
}});


/*Animal_Id: data['Animal ID'], 
Name_intake: data.Name_intake,
DateTime_intake: data.DateTime_intake,
Found_Location: data.Found_Location,
Intake_Type: data.Intake_Type,
IntakeCondition: data.IntakeCondition,
Animal_Type_intake: data.Animal_Type_intake,
Sex_Intake: data.Sex_Intake,
Color_intake: data.Color_intake,
DateTime_outcome: data.DateTime_outcome,
Outcome_Type: data.Outcome_Type,
Sex_upon_Outcome: data.Sex_upon_Outcome,
fixed_changed: data.fixed_changed,
Age_Bucket: data.Age_Bucket,
length_of_stay: data.length_of_stay,
breed_type: data.breed_type;*/