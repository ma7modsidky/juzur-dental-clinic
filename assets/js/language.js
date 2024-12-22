const translations = {
    en: {
        'home' : 'Home',
        'services' : 'Services',
        'team': 'Our Team',
        'contact' : 'Contact Us',
        'welcome to': 'Welcome to',
        'juzur': 'Juzur',
        'intro': 'At Juzur dental clinics, our highly specialised team is dedicated to provide the highest quality of care with optimal results, we place value on TOP for our patients total experience at Juzur from creating a calm and friendly environment to making every effort to gain our patients’ satisfaction and expectation',
        'book an appointment': 'Book an appointment',
        'veneers': 'Veneers',
        'veneers-intro': 'veneer installation service to beautify worn and broken teeth and get rid of gaps and pigmentation in a quick time, with unparalleled quality, and in a 100% natural shape and color.',
        'dental-crown': 'Dental Crown Installation',
        'dental-crown-intro': 'installing dental crowns is a safe solution to preserve molars after nerve filling operations, to protect them from fractures or corrosion. The crowns are manufactured in our own laboratories in only 40 minutes.',
        'dental-implants': 'Dental Implants',
        'dental-implants-intro': 'Replacing missing teeth resulting from fractures and decay to maintain gum health through dental implants using advanced techniques and methods. The formula is manufactured in our laboratories at breakneck speed.',
        'teeth-whitening': 'Teeth Whitening',
        'teeth-whitening-intro': 'By removing pigmentation, returning the teeth to their natural color, and unifying the color for a new, attractive smile.',
        'root-canal': 'Root Canal Therapy',
        'root-canal-intro': 'A dental procedure to remove inflamed or infected pulp on the inside of the tooth which is then carefully cleaned and disinfected.',
        'tooth-extraction': 'Tooth Extraction',
        'tooth-extraction-intro': 'A dental procedure during which your tooth is completely removed from its socket. Sometimes, people refer to this as “pulling" a tooth.',

    },

    ar: {
        'home' : 'الرئيسية',
        'services' : 'خدماتنا',
        'team': 'فريقنا',
        'contact' : 'تواصل معنا',
        'welcome to': ' اهلا بك في',
        'juzur': 'جذور',
        'intro': 'في عيادات جذور لطب الأسنان، يكرس فريقنا المتخصص للغاية نفسه لتوفير أعلى مستوى من الرعاية مع نتائج مثالية، ونضع قيمة كبيرة على أعلى مستوى لتجربة مرضانا الإجمالية في جذور من خلال خلق بيئة هادئة وودية إلى بذل كل جهد ممكن لكسب رضا مرضانا وتوقعاتهم.',
        'book an appointment': 'احجز معاد',
        'veneers' : 'تركيبات الأسنان',
        'veneers-intro': 'خدمة تركيب القشور التجميلية لتجميل الأسنان المهترئة والمكسورة والتخلص من الفراغات والتصبغات في وقت سريع وبجودة لا مثيل لها وبشكل ولون طبيعي 100%.',
        'dental-crown': 'تركيب تاج الاسنان',
        'dental-crown-intro': 'تركيب تيجان الأسنان هو الحل الآمن للحفاظ على الأضراس بعد عمليات حشو العصب، لحمايتها من الكسور أو التآكل. يتم تصنيع التيجان في مختبراتنا الخاصة في 40 دقيقة فقط.',
        'dental-implants': 'زراعة الأسنان',
        'dental-implants-intro': 'تعويض الأسنان المفقودة الناتجة عن الكسور والتسوس للحفاظ على صحة اللثة من خلال زراعة الأسنان باستخدام تقنيات وطرق متطورة، حيث يتم تصنيع التركيبة في مختبراتنا بسرعة فائقة.',
        'teeth-whitening': 'تبييض الأسنان',
        'teeth-whitening-intro': 'من خلال إزالة التصبغات وإرجاع الأسنان إلى لونها الطبيعي وتوحيد اللون للحصول على ابتسامة جديدة وجذابة.',
        'root-canal': 'علاج قناة الجذر',
        'root-canal-intro': 'إجراء طب الأسنان لإزالة اللب الملتهب أو المصاب من داخل السن، ثم يتم تنظيفه وتطهيره بعناية.',
        'tooth-extraction': 'خلع الأسنان',
        'tooth-extraction-intro': 'عملية طب الأسنان التي يتم خلالها إزالة السن بالكامل من تجويفه. في بعض الأحيان، يشير الناس إلى هذه العملية باسم "سحب" السن.',
    }
}

const languageSelectors = document.querySelectorAll('.language-selector')
languageSelectors.forEach( selector => {
    selector.addEventListener('change', function(){
        const lang = selector.value;
        languageSelectors.forEach(selector=>{
            selector.value = lang
        });
        document.querySelectorAll('[data-translation]').forEach(element => {
            const key = element.getAttribute('data-translation')
            element.textContent = translations[lang][key];
        });
    });
})