let input = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8',
];

input = [
    '21-82,22-81',
    '46-47,21-47',
    '7-88,27-89',
    '37-38,33-42',
    '5-99,51-99',
    '58-83,59-84',
    '8-12,11-53',
    '9-55,10-11',
    '29-55,30-56',
    '11-78,12-77',
    '26-57,5-62',
    '85-91,5-85',
    '21-58,15-93',
    '27-27,27-57',
    '2-9,12-96',
    '21-30,26-29',
    '1-99,98-99',
    '13-93,14-95',
    '81-81,21-82',
    '12-13,12-78',
    '43-83,4-42',
    '25-25,25-95',
    '54-77,53-96',
    '36-92,72-93',
    '24-30,24-26',
    '60-60,21-59',
    '55-55,54-95',
    '77-77,10-78',
    '56-96,18-93',
    '61-61,61-72',
    '63-98,63-64',
    '35-50,36-49',
    '8-87,1-85',
    '59-81,81-81',
    '95-96,92-97',
    '1-58,2-57',
    '32-57,32-82',
    '62-66,67-67',
    '15-33,27-46',
    '9-35,36-88',
    '63-93,1-3',
    '63-86,63-64',
    '20-28,19-29',
    '32-85,32-32',
    '19-71,29-71',
    '4-66,6-65',
    '67-77,66-78',
    '91-96,1-95',
    '7-57,8-93',
    '45-45,45-46',
    '23-23,22-97',
    '1-2,2-98',
    '10-23,22-83',
    '32-46,36-46',
    '93-94,20-94',
    '12-87,11-91',
    '10-77,9-88',
    '11-20,21-43',
    '15-76,15-15',
    '10-98,10-97',
    '59-71,12-27',
    '3-56,2-56',
    '24-88,25-25',
    '40-40,39-46',
    '54-89,54-88',
    '18-93,94-94',
    '23-62,22-62',
    '23-23,23-49',
    '21-95,63-95',
    '2-95,94-94',
    '8-13,11-12',
    '29-82,29-81',
    '24-46,25-46',
    '15-92,58-92',
    '5-86,5-78',
    '3-98,4-96',
    '21-56,56-67',
    '78-98,19-99',
    '16-28,16-29',
    '95-96,96-96',
    '4-95,16-96',
    '21-68,21-68',
    '18-94,19-91',
    '7-56,8-90',
    '8-56,8-8',
    '28-66,29-76',
    '72-73,74-89',
    '21-42,22-41',
    '30-88,47-77',
    '39-99,40-98',
    '70-71,30-71',
    '29-90,89-90',
    '44-75,44-76',
    '32-35,36-95',
    '18-48,19-48',
    '10-67,9-69',
    '18-70,17-69',
    '39-51,5-82',
    '7-96,96-99',
    '9-27,10-82',
    '86-86,53-86',
    '34-53,49-54',
    '5-91,91-99',
    '73-76,68-81',
    '53-94,53-93',
    '1-62,40-62',
    '34-52,53-53',
    '49-63,48-66',
    '53-53,53-93',
    '2-72,3-71',
    '22-97,21-99',
    '46-91,47-91',
    '8-53,7-98',
    '20-21,15-21',
    '5-99,5-98',
    '6-7,6-51',
    '5-64,6-88',
    '21-87,20-87',
    '30-81,81-82',
    '6-82,6-83',
    '9-9,9-12',
    '8-19,9-19',
    '64-80,63-80',
    '34-34,33-66',
    '20-20,19-70',
    '1-97,97-99',
    '87-88,12-87',
    '13-88,14-87',
    '11-94,5-99',
    '46-84,45-83',
    '24-90,25-40',
    '24-74,30-73',
    '6-20,7-21',
    '10-76,60-91',
    '35-57,35-56',
    '21-74,75-75',
    '18-77,76-78',
    '6-85,84-84',
    '13-94,14-97',
    '60-75,61-69',
    '58-59,58-97',
    '47-48,2-48',
    '25-59,26-31',
    '27-28,27-96',
    '12-79,6-78',
    '37-83,44-84',
    '15-46,11-45',
    '42-90,41-95',
    '44-79,27-79',
    '5-55,5-6',
    '55-56,55-83',
    '81-92,80-99',
    '31-68,32-68',
    '8-71,9-9',
    '15-85,16-84',
    '41-48,49-61',
    '86-87,66-87',
    '86-96,26-85',
    '10-42,10-10',
    '20-28,26-48',
    '6-86,7-58',
    '30-77,75-80',
    '10-65,9-9',
    '18-91,17-95',
    '31-76,77-85',
    '26-28,28-68',
    '29-37,29-32',
    '92-92,13-93',
    '6-61,7-61',
    '1-98,2-2',
    '52-70,60-80',
    '4-91,2-91',
    '7-45,4-6',
    '40-85,41-61',
    '5-6,5-89',
    '23-71,70-71',
    '4-68,46-67',
    '57-83,57-75',
    '2-98,21-99',
    '4-98,3-98',
    '10-79,10-11',
    '41-41,41-44',
    '17-17,17-93',
    '6-85,7-7',
    '3-12,2-80',
    '25-49,25-60',
    '72-90,52-72',
    '8-42,40-43',
    '25-95,25-26',
    '27-58,28-59',
    '1-92,1-1',
    '14-90,15-89',
    '6-73,7-20',
    '5-92,5-93',
    '99-99,84-98',
    '66-68,28-67',
    '14-96,95-95',
    '41-75,69-76',
    '25-69,20-69',
    '10-43,5-15',
    '1-92,17-93',
    '51-52,23-52',
    '32-43,44-44',
    '28-28,28-86',
    '23-55,54-55',
    '20-70,21-27',
    '24-52,25-25',
    '5-88,6-6',
    '59-82,60-82',
    '18-52,8-53',
    '34-48,12-33',
    '3-3,2-17',
    '12-87,13-62',
    '63-75,23-76',
    '40-92,41-93',
    '30-91,29-30',
    '73-95,72-96',
    '2-45,1-3',
    '48-99,18-98',
    '43-75,75-84',
    '96-96,1-97',
    '27-28,27-97',
    '97-99,4-97',
    '94-96,50-95',
    '29-29,27-28',
    '3-5,6-31',
    '21-87,52-88',
    '21-92,92-95',
    '4-6,11-46',
    '18-33,21-34',
    '30-78,31-40',
    '39-46,45-47',
    '48-69,68-76',
    '8-37,37-91',
    '18-75,21-98',
    '32-43,16-20',
    '36-87,59-88',
    '6-66,65-67',
    '3-76,3-77',
    '47-95,48-88',
    '4-70,1-1',
    '40-94,12-40',
    '95-99,12-95',
    '14-71,70-70',
    '32-90,69-92',
    '99-99,14-94',
    '1-69,69-89',
    '43-77,53-76',
    '60-62,21-69',
    '11-31,18-91',
    '9-83,9-9',
    '2-90,1-90',
    '30-87,31-31',
    '65-66,64-65',
    '66-67,3-66',
    '31-35,30-36',
    '4-93,92-93',
    '9-16,10-15',
    '68-86,68-71',
    '8-20,20-64',
    '4-31,5-5',
    '48-99,49-99',
    '2-94,95-96',
    '58-98,10-80',
    '33-63,62-62',
    '19-52,18-53',
    '5-43,17-38',
    '62-62,61-62',
    '21-44,21-39',
    '18-73,73-74',
    '1-32,1-39',
    '2-5,5-99',
    '36-67,10-38',
    '37-71,33-70',
    '70-72,69-73',
    '53-81,52-90',
    '57-98,9-97',
    '33-82,95-99',
    '90-97,13-96',
    '39-94,94-99',
    '33-85,32-84',
    '4-78,5-78',
    '51-82,51-81',
    '67-86,64-85',
    '31-77,77-78',
    '8-33,8-9',
    '21-71,22-70',
    '4-91,7-70',
    '11-98,12-97',
    '27-39,27-28',
    '3-54,3-53',
    '65-99,52-65',
    '53-98,24-88',
    '74-94,44-95',
    '21-38,39-95',
    '59-60,58-93',
    '1-20,9-19',
    '11-61,10-61',
    '30-89,88-89',
    '10-71,11-47',
    '9-97,10-96',
    '21-81,80-81',
    '11-18,21-66',
    '52-97,53-85',
    '7-94,6-95',
    '57-94,23-95',
    '59-60,23-60',
    '94-94,27-95',
    '96-97,62-97',
    '1-82,81-83',
    '70-86,68-85',
    '45-74,44-97',
    '2-56,3-57',
    '7-91,50-90',
    '33-78,32-86',
    '52-52,22-53',
    '6-55,7-23',
    '1-91,3-90',
    '26-59,26-60',
    '4-94,4-95',
    '60-89,16-92',
    '45-46,1-46',
    '7-58,58-59',
    '36-96,23-97',
    '6-95,5-96',
    '59-59,59-63',
    '20-21,20-41',
    '68-68,3-67',
    '79-89,78-90',
    '27-29,28-29',
    '96-97,26-64',
    '18-18,17-96',
    '41-41,41-66',
    '5-95,4-94',
    '37-95,36-97',
    '42-90,41-42',
    '57-57,15-56',
    '95-98,94-99',
    '28-93,27-94',
    '94-94,30-95',
    '50-67,54-84',
    '9-91,8-92',
    '2-92,1-93',
    '10-34,26-33',
    '28-99,23-95',
    '37-56,56-65',
    '8-98,9-94',
    '5-89,6-88',
    '12-13,12-89',
    '5-15,16-68',
    '18-69,23-69',
    '66-99,67-67',
    '20-72,20-21',
    '50-75,25-49',
    '35-50,35-36',
    '41-65,63-66',
    '14-82,81-82',
    '50-51,17-81',
    '59-90,58-89',
    '12-93,93-97',
    '14-97,15-15',
    '8-48,8-13',
    '4-98,5-99',
    '38-85,38-84',
    '4-4,3-52',
    '94-95,2-95',
    '4-84,3-84',
    '8-76,7-76',
    '13-87,13-86',
    '2-99,98-99',
    '36-83,37-76',
    '4-46,4-65',
    '97-97,43-88',
    '8-92,33-92',
    '70-70,64-69',
    '10-54,11-54',
    '18-95,19-28',
    '3-91,4-4',
    '12-87,26-88',
    '81-85,78-85',
    '49-65,65-66',
    '84-90,90-94',
    '16-83,15-97',
    '16-77,15-95',
    '5-99,61-99',
    '4-75,2-3',
    '33-67,17-80',
    '41-96,40-97',
    '6-48,2-5',
    '18-22,19-21',
    '44-47,44-48',
    '1-95,2-94',
    '5-60,4-79',
    '11-99,12-38',
    '20-96,96-97',
    '81-81,1-82',
    '22-63,23-62',
    '10-79,9-78',
    '45-96,46-96',
    '62-85,86-86',
    '6-79,36-78',
    '3-90,3-93',
    '17-36,17-25',
    '13-81,12-82',
    '98-99,8-99',
    '1-99,98-98',
    '47-71,46-70',
    '89-90,18-90',
    '16-56,55-55',
    '15-21,24-48',
    '14-31,30-31',
    '25-36,25-29',
    '58-86,75-91',
    '64-70,65-69',
    '13-68,14-69',
    '12-86,12-51',
    '17-73,18-74',
    '98-98,1-99',
    '89-92,90-91',
    '2-99,1-99',
    '20-69,60-70',
    '27-47,26-47',
    '11-71,12-71',
    '8-91,9-91',
    '1-89,4-88',
    '27-96,27-85',
    '63-92,92-97',
    '48-87,47-98',
    '25-90,26-85',
    '39-95,43-98',
    '37-98,37-99',
    '98-99,7-98',
    '4-61,4-60',
    '17-98,17-99',
    '59-63,31-64',
    '24-54,25-53',
    '46-99,10-16',
    '7-99,6-99',
    '18-93,92-93',
    '46-98,3-95',
    '26-96,25-81',
    '2-97,3-90',
    '22-22,21-77',
    '81-81,25-81',
    '19-44,20-47',
    '79-79,42-80',
    '35-95,4-95',
    '1-91,2-2',
    '70-79,69-80',
    '12-87,8-88',
    '16-78,17-73',
    '7-88,7-91',
    '17-18,1-18',
    '5-86,4-75',
    '39-89,40-87',
    '9-39,9-24',
    '14-96,13-97',
    '2-80,2-3',
    '5-28,21-29',
    '69-75,11-74',
    '12-32,10-31',
    '9-76,9-77',
    '87-88,6-88',
    '15-78,15-15',
    '95-99,32-95',
    '6-11,12-26',
    '59-60,10-60',
    '39-94,39-39',
    '97-97,55-98',
    '38-42,37-43',
    '8-8,8-98',
    '30-94,30-98',
    '90-91,9-91',
    '4-96,5-91',
    '14-61,1-4',
    '33-58,32-59',
    '86-91,24-86',
    '85-85,84-96',
    '38-96,37-91',
    '1-41,12-94',
    '22-95,78-94',
    '43-44,38-43',
    '37-69,37-68',
    '78-98,78-95',
    '68-86,45-90',
    '10-56,10-48',
    '76-76,2-77',
    '11-54,12-32',
    '43-73,43-74',
    '79-99,7-98',
    '6-95,19-98',
    '32-97,96-97',
    '41-41,4-42',
    '40-57,24-40',
    '10-13,12-28',
    '1-4,3-24',
    '85-95,85-86',
    '6-98,5-7',
    '35-54,42-51',
    '17-80,27-71',
    '93-93,2-94',
    '21-68,21-69',
    '14-45,13-45',
    '55-56,55-67',
    '44-80,17-79',
    '41-84,42-44',
    '57-91,91-96',
    '40-98,41-98',
    '85-88,78-85',
    '24-95,24-25',
    '52-95,55-96',
    '8-28,7-27',
    '22-96,19-97',
    '70-73,74-81',
    '20-70,2-47',
    '3-39,2-40',
    '4-20,3-20',
    '33-34,33-92',
    '1-96,2-85',
    '13-93,12-92',
    '45-59,46-59',
    '34-73,34-72',
    '4-90,4-91',
    '11-57,11-13',
    '7-94,5-24',
    '26-97,25-96',
    '43-76,13-75',
    '67-75,76-99',
    '52-80,51-79',
    '18-18,17-67',
    '25-86,26-87',
    '18-79,17-18',
    '44-44,44-96',
    '51-80,38-52',
    '5-64,6-63',
    '27-54,37-55',
    '47-47,47-78',
    '6-76,7-75',
    '14-95,14-14',
    '8-68,9-49',
    '35-44,35-43',
    '2-67,1-67',
    '32-88,30-57',
    '19-80,79-80',
    '8-54,7-9',
    '25-49,8-48',
    '18-40,19-39',
    '38-92,39-96',
    '4-7,6-82',
    '2-97,1-94',
    '11-42,12-41',
    '22-47,21-57',
    '11-97,2-12',
    '55-98,69-98',
    '9-51,8-50',
    '62-63,2-62',
    '1-7,8-98',
    '35-48,36-47',
    '55-96,29-97',
    '85-85,61-81',
    '45-56,44-55',
    '16-19,7-17',
    '19-33,20-20',
    '16-77,15-76',
    '38-91,17-90',
    '10-51,3-9',
    '28-99,7-29',
    '78-97,97-99',
    '4-51,5-35',
    '54-73,35-72',
    '62-63,62-62',
    '14-14,14-97',
    '55-74,55-59',
    '22-85,55-86',
    '27-84,26-97',
    '36-37,37-87',
    '1-96,5-97',
    '1-71,3-71',
    '26-87,27-88',
    '83-99,73-96',
    '1-98,2-98',
    '12-16,21-87',
    '82-82,83-89',
    '42-92,42-91',
    '68-72,68-69',
    '13-30,12-31',
    '6-10,9-97',
    '78-78,12-79',
    '47-86,86-93',
    '57-94,58-81',
    '30-85,29-86',
    '14-17,18-96',
    '94-96,63-94',
    '37-82,38-81',
    '23-90,42-91',
    '30-97,31-98',
    '82-94,14-81',
    '8-35,9-9',
    '65-98,97-99',
    '30-50,29-31',
    '1-2,1-60',
    '69-70,70-76',
    '20-84,20-96',
    '19-46,36-88',
    '1-90,5-89',
    '4-4,4-87',
    '18-79,17-78',
    '14-99,13-98',
    '46-86,47-98',
    '79-81,35-80',
    '26-51,25-50',
    '78-78,14-79',
    '9-92,10-91',
    '12-46,12-96',
    '36-93,1-93',
    '77-78,76-79',
    '56-93,94-94',
    '1-85,13-76',
    '43-95,9-42',
    '79-90,78-89',
    '32-98,9-97',
    '9-92,5-10',
    '37-84,3-45',
    '59-85,60-85',
    '9-95,8-94',
    '31-87,30-87',
    '10-17,18-18',
    '77-77,76-89',
    '12-83,38-96',
    '34-91,35-90',
    '12-95,70-96',
    '14-79,13-78',
    '1-94,93-94',
    '19-29,25-28',
    '68-99,64-68',
    '37-79,8-80',
    '9-76,11-78',
    '5-98,3-48',
    '47-59,48-58',
    '65-72,39-73',
    '27-67,27-35',
    '60-77,59-89',
    '46-88,35-87',
    '67-97,68-99',
    '4-97,3-98',
    '4-79,80-80',
    '42-58,58-70',
    '39-97,7-39',
    '10-49,11-48',
    '22-74,23-23',
    '13-58,12-58',
    '7-79,8-78',
    '83-84,80-99',
    '97-98,35-94',
    '36-36,36-66',
    '66-79,65-90',
    '5-32,3-33',
    '41-86,87-87',
    '41-54,32-41',
    '14-99,10-98',
    '9-93,9-92',
    '53-58,59-98',
    '60-61,5-60',
    '13-30,12-31',
    '8-97,7-98',
    '25-34,29-32',
    '69-69,6-70',
    '18-18,7-19',
    '23-48,23-23',
    '31-59,32-41',
    '1-7,6-67',
    '1-88,2-87',
    '9-9,8-91',
    '8-96,8-31',
    '25-83,21-21',
    '45-46,45-80',
    '10-92,91-92',
    '3-45,2-63',
    '22-48,22-52',
    '52-97,52-98',
    '10-90,12-89',
    '3-48,25-51',
    '62-96,92-98',
    '2-97,6-98',
    '70-83,70-71',
    '98-99,94-99',
    '6-84,7-81',
    '16-70,71-82',
    '16-16,16-81',
    '83-84,11-83',
    '30-74,71-75',
    '2-25,1-26',
    '79-79,30-80',
    '67-72,66-68',
    '7-96,8-97',
    '8-13,11-14',
    '10-73,10-72',
    '20-22,20-20',
    '88-92,89-97',
    '75-96,68-74',
    '4-98,1-99',
    '39-47,38-48',
    '39-77,40-77',
    '38-42,38-41',
    '50-94,51-94',
    '61-82,62-72',
    '4-75,3-96',
    '3-20,1-4',
    '18-97,9-17',
    '1-94,2-93',
    '95-99,88-94',
    '83-89,19-83',
    '49-57,49-55',
    '18-26,19-77',
    '34-46,38-47',
    '11-93,10-98',
    '6-80,7-94',
    '5-91,90-91',
    '21-44,43-44',
    '91-91,12-90',
    '1-2,1-96',
    '5-96,18-95',
    '36-65,5-65',
    '18-18,18-71',
    '31-32,31-35',
    '13-96,12-96',
    '25-74,24-26',
    '54-54,14-55',
    '14-79,15-80',
    '4-64,5-5',
    '24-28,23-27',
    '20-89,2-21',
    '30-98,30-50',
    '69-69,6-70',
    '78-79,77-79',
    '24-96,25-74',
    '68-91,8-37',
    '3-98,4-98',
    '13-95,14-97',
    '2-13,3-14',
    '39-92,40-91',
    '16-88,87-87',
    '70-73,64-72',
    '55-96,95-97',
    '8-10,15-72',
    '23-44,24-33',
    '48-82,48-49',
    '59-72,59-60',
    '10-54,11-11',
    '8-47,44-47',
    '15-81,14-82',
    '30-46,5-37',
    '67-81,69-99',
    '70-97,69-99',
    '88-88,40-88',
    '39-97,38-96',
    '81-85,80-84',
    '56-57,15-56',
    '5-84,78-85',
    '7-59,6-60',
    '61-63,62-92',
    '61-93,87-94',
    '5-80,5-6',
    '7-66,7-7',
    '1-99,2-98',
    '3-39,3-29',
    '41-85,69-85',
    '38-60,8-59',
    '6-45,6-72',
    '62-82,29-81',
    '21-94,22-93',
    '41-42,41-52',
    '24-24,24-52',
    '53-98,12-98',
    '28-95,27-27',
    '83-83,55-84',
    '16-96,95-96',
    '49-90,89-89',
    '2-96,2-95',
    '3-3,3-88',
    '24-77,61-78',
    '83-85,39-84',
    '3-65,2-97',
    '15-81,2-80',
    '14-32,13-15',
    '66-80,67-79',
    '23-23,23-92',
    '34-89,33-90',
    '5-94,4-4',
    '7-96,95-96',
    '47-92,48-60',
    '15-41,14-15',
    '33-77,47-77',
    '11-88,11-89',
    '4-38,18-23',
    '7-91,8-92',
    '65-66,19-65',
    '64-93,92-92',
    '25-82,25-81',
    '32-32,31-98',
    '34-71,34-71',
    '52-61,48-66',
    '61-85,60-96',
    '8-64,16-65',
    '1-3,4-82',
    '9-95,10-10',
    '3-59,1-56',
    '2-28,2-7',
    '11-95,11-99',
    '58-78,78-85',
    '27-75,27-28',
    '26-26,25-87',
    '7-39,7-40',
    '32-66,10-67',
    '14-93,13-94',
    '15-96,96-99',
    '67-87,90-91',
    '94-95,35-95',
    '16-40,2-17',
    '30-81,62-82',
    '52-53,34-53',
    '5-93,92-92',
    '17-94,94-95',
    '31-87,83-84',
    '35-41,34-72',
    '84-85,84-97',
    '46-99,47-96',
    '28-80,1-27',
    '41-99,37-69',
    '28-78,29-77',
    '49-69,64-70',
    '46-65,65-73',
    '16-91,16-92',
    '88-88,12-89',
    '38-84,39-85',
    '7-8,7-27',
    '27-97,97-99',
    '67-67,68-75',
    '66-67,67-67',
    '12-58,17-86',
    '12-98,13-99',
    '14-57,15-58',
    '27-32,28-32',
    '65-68,69-82',
    '98-99,64-99',
    '48-68,48-87',
    '51-51,51-54',
    '18-84,32-90',
    '1-16,8-93',
    '6-88,7-7',
    '3-91,1-91',
    '86-97,86-86',
    '72-96,72-72',
    '9-61,8-60',
    '10-75,75-76',
    '75-88,87-87',
    '65-75,65-77',
    '97-98,22-93',
    '55-55,42-56',
    '8-63,1-63',
    '13-64,35-51',
    '7-88,45-89',
    '77-79,74-79',
    '24-97,24-26',
    '2-67,7-70',
    '14-62,47-72',
    '3-84,56-94',
    '6-71,20-72',
    '2-82,6-81',
    '82-83,16-82',
    '69-84,68-85',
    '83-85,82-85',
    '79-86,79-79',
    '46-91,90-91',
    '27-97,27-98',
    '21-67,68-89',
    '80-85,4-80',
    '25-85,25-86',
    '25-82,27-81',
    '26-95,94-96',
    '83-93,82-99',
    '6-97,7-94',
    '40-97,18-40',
    '3-3,3-85',
    '97-98,1-98',
    '5-98,5-6',
    '5-83,6-83',
    '16-94,82-97',
    '19-56,2-18',
    '15-84,16-79',
    '29-31,30-97',
    '43-90,42-43',
    '3-12,2-4',
    '23-76,22-24',
    '43-80,79-80',
    '19-81,19-82',
    '1-90,2-89',
    '37-37,23-38',
    '91-99,56-91',
    '27-87,28-88',
    '14-16,15-91',
    '50-66,32-49',
    '48-93,48-49',
    '30-85,29-84',
    '13-76,58-77',
    '69-98,40-97',
    '27-55,19-54',
    '14-98,13-99',
    '45-78,78-79',
    '5-67,6-67',
    '46-91,47-90',
    '37-55,36-67',
    '55-62,61-62',
    '1-95,48-96',
    '16-97,17-99',
    '40-62,41-61',
    '18-59,56-57',
    '49-61,60-62',
    '66-71,65-73',
    '45-47,46-82',
    '4-51,3-50',
    '68-77,7-68',
    '59-96,59-91',
    '40-69,41-68',
    '4-96,3-96',
    '4-94,4-4',
    '8-18,15-25',
    '26-26,27-27',
    '5-62,8-75',
    '88-88,4-89',
    '39-67,17-68',
    '81-85,12-66',
    '51-65,50-52',
    '15-63,15-15',
    '63-64,30-63',
    '88-92,2-88',
    '36-81,35-87',
    '21-93,6-93',
    '28-91,28-28',
    '60-94,5-94',
    '2-96,95-97',
    '11-92,92-94',
    '82-86,80-82',
    '30-80,38-80',
    '6-58,5-85',
    '24-35,34-36',
    '55-99,55-89',
    '24-99,25-97',
    '11-25,19-26',
    '11-73,73-90',
    '13-85,14-84',
    '4-87,5-89',
    '3-3,4-91',
    '54-71,55-71',
    '28-42,29-43',
    '31-31,31-81',
    '15-28,14-16',
    '72-72,26-71',
    '85-93,72-84',
    '7-73,6-74',
    '23-24,23-29',
    '28-77,29-76',
    '1-97,1-1',
    '14-80,13-80',
    '60-62,61-61',
    '41-81,44-79',
    '21-87,22-58',
    '25-60,25-59',
    '34-91,35-99',
    '16-63,64-64',
    '6-99,6-98',
    '39-92,11-91',
    '54-99,51-92',
    '5-93,6-95',
    '5-5,4-95',
    '1-4,3-85',
    '82-83,8-82',
    '56-57,57-57',
    '33-35,10-34',
    '44-51,43-57',
    '25-62,26-61',
    '1-76,2-87',
    '8-11,7-63',
    '10-10,9-92',
    '34-69,5-70',
    '5-97,74-99',
    '22-54,53-55',
    '71-89,88-89',
    '50-84,51-83',
    '4-16,15-94',
    '45-58,34-99',
    '18-96,4-29',
    '3-91,4-80',
    '91-92,57-93',
    '28-28,28-94',
    '7-35,7-36',
    '41-91,42-72',
    '49-55,49-49',
    '3-82,3-91',
    '8-9,8-66'
];

let result = 0;

input.forEach(el => {
    const elves = el.split(',');
    const first = elves[0].split('-').map(Number);
    const second = elves[1].split('-').map(Number);

    const firstContainsSecond = first[0] <= second[0] && first[1] >= second[0];

    const secondContainsFirst = second[0] <= first[0] && second[1] >= first[0];

    if (firstContainsSecond || secondContainsFirst) {
        result++;
    }
})

console.log('Part 2: ' + result);
