import cardiology from './cardiology.webp'
import gastro from './gastroenterology.jpg'
import neonatology from './neonatology.jpg'
import neurosurgery from './neurosurgery.jpg'
import neurology from './neurology.jpg'
import oncology from './oncology.jpg'
import urology from './urology.jpg'
import plastic from './plastic.jpg'
import nephrology from './nephrology.jpg'

import general from './generalmedicine.jpg'
import derma from './dermatology.jpg'
import gynec from './obg.jpg'
import ophthalmology from './ophthalmology.jpg'
import ortho from './orthopedics.jpg'
import pediatrics from './pediatrics.jpg'
import ent from './ent.jpg'

import doc1 from './doctor1.jpeg'
import doc2 from './doctor2.jpeg'
import doc3 from './doctor3.jpeg'
import doc4 from './doctor4.jpeg'
import doc5 from './doctor5.jpeg'
import doc6 from './doctor6.jpeg'
import doc7 from './doctor7.jpeg'
import doc8 from './doctor8.jpeg'
import doc9 from './doctor9.jpeg'
import doc10 from './doctor10.jpeg'
import doc11 from './doctor11.jpeg'
import doc12 from './doctor12.jpeg'
import doc13 from './doctor13.jpeg'
import doc14 from './doctor14.jpeg'
import doc15 from './doctor15.jpeg'
import doc16 from './doctor16.jpeg'
import doc17 from './doctor17.jpeg'







export const assets={
    cardiology,
    gastro,
    neonatology,
    neurosurgery,
    neurology,
    oncology,
    urology,
    plastic,
    nephrology,
    general,
    derma,
    gynec,
    ophthalmology,
    ortho,
    pediatrics,
    ent

}

export const  specialityDept =[
    {
        speciality: "Cardiology",
        image: cardiology
    },

    {
        speciality: "Nephrology",
        image: nephrology
    },

    {
        speciality: "Neurosurgery",
        image: neurosurgery
    },

    {
        speciality: "Neurology",
        image: neurology
    },

    {
        speciality: "Urology",
        image: urology
    },

    {
        speciality: "Neonatology",
        image: neonatology
    },

    {
        speciality: "Oncology",
        image: oncology
    },

    {
        speciality: "Gastroenterology",
        image: gastro
    }
]

    

export const generalDept =[
    {
        speciality: "General Medicine",
        image: general
    },

    {
        speciality: "Dermatology",
        image: derma
    },

    {
        speciality: "Gyneacolgy",
        image: gynec
    },

    {
        speciality: "Ophthalmology",
        image: ophthalmology
    },

    {
        speciality: "Orthopedics",
        image: ortho
    },

    {
        speciality: "Pediatrics",
        image: pediatrics
    },

    {
        speciality: "ENT",
        image: ent
    },

    
]

export const doctors =[
    {   
        _id: 'doc1',
        name: 'Dr. Sekhar Krishna',
        image: doc1,
        speciality: 'Cardiology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',

    },

    {   
        _id: 'doc2',
        name: 'Dr. Sneha Varghese',
        image: doc2,
        speciality: 'Gynecology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc3',
        name: 'Dr. Neelima Krishna',
        image: doc3,
        speciality: 'Pediatrics',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc4',
        name: 'Dr. Sandra Chandy',
        image: doc4,
        speciality: 'Neuro Surgery',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc5',
        name: 'Dr. Rohan P K',
        image: doc5,
        speciality: 'General Medicine',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc6',
        name: 'Dr. Vijay Mohan',
        image: doc6,
        speciality: 'Nephrology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc7',
        name: 'Dr. Roy M N',
        image: doc7,
        speciality: 'Neurology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc8',
        name: 'Dr. Sulekha Khan',
        image: doc8,
        speciality: 'Ophthalmology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc9',
        name: 'Dr. Zakir Hussain',
        image: doc9,
        speciality: 'Neonatology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc10',
        name: 'Dr. Anna Fernandez',
        image: doc10,
        speciality: 'Gastroenterology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc11',
        name: 'Dr. Nimisha Vijay',
        image: doc11,
        speciality: 'Oncology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc12',
        name: 'Dr. Kishore Sathya',
        image: doc12,
        speciality: 'ENT',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc13',
        name: 'Dr. Aleena Menon',
        image: doc13,
        speciality: 'Orthopedics',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc14',
        name: 'Dr. Mary Alan',
        image: doc14,
        speciality: 'Urology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc15',
        name: 'Dr. Catherine Disooza',
        image: doc15,
        speciality: 'Neonatology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

    {   
        _id: 'doc16',
        name: 'Dr. Kaira Miri',
        image: doc16,
        speciality: 'Gynecology',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },


    {   
        _id: 'doc17',
        name: 'Dr. Rahman Laila',
        image: doc17,
        speciality: 'Pediatrics',
        degree:'MD, DM, FACC (H)',
        experience: '10 Years',
        about: 'Dr. Sekhar Krishna M. S. is Clinical Professor in the Department of Cardiology at Medicity Institute of Medical Sciences. His fields of interest are coronary interventions, cardiac electrophysiology and heart failure. Dr. Sekhar Krishna M. S. graduated from T.D. Medical College, Alappuzha in 2010. He obtained his MD (Internal Medicine) degree from Government Medical College, Trivandrum. He completed Cardiology Residency at Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum for DM Cardiology degree. He has expertise in noninvasive investigative modalities like echocardiography, Holter evaluation, nuclear cardiac imaging and stress testing. He is a skilled interventionalist with special focus on complex coronary interventions including use of rotablation and retrograde techniques for crossing chronic total occlusions. Dr. Sekhar Krishna completed a one-year Clinical Cardiac Electrophysiology fellowship training at Case Western Reserve University, Cleveland , USA under the guidance of Professor Mauricio Arruda, one of the leading cardiac electrophysiologists in USA. He has contributed significantly to the fields of preventive cardiology and population health sciences. He is also actively involved in various professional memberships and serves as a technical expert on several esteemed committees and panels.',
        fees: '500',
        
    },

   
]
