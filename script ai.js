// const api = "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";
// const inp = document.getElementById('inp');
// const images = document.querySelector('.images');

// const getImage = async () => {
//     try {
//         // التحقق من أن المستخدم أدخل نصًا
//         if (!inp.value.trim()) {
//             alert("يرجى إدخال وصف للصورة!");
//             return;
//         }

//         // إعداد الطلب إلى OpenAI API
//         const methods = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${api}`
//             },
//             body: JSON.stringify({
//                 "model": "dall-e-2",  // تحديد النموذج
//                 "prompt": inp.value,
//                 "n": 1,
//                 "size": "256x256"
//             })
//         };

//         const response = await fetch("https://api.openai.com/v1/images/generations", methods);

//         console.log(response); // للتحقق من استجابة السيرفر

//         if (!response.ok) {
//             throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         const listImages = data.data;

//         console.log(data);

//         // تفريغ الصور القديمة قبل إضافة الجديدة
//         images.innerHTML = '';

//         listImages.forEach(photo => {
//             const container = document.createElement("div");
//             images.append(container);

//             const img = document.createElement("img");
//             container.append(img);

//             img.src = photo.url;  // تصحيح الاسم
//             img.alt = "Generated Image";
//         });

//     } catch (error) {
//         console.error("Error fetching images:", error);
//     }
// };

// const api = "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";  // ضع مفتاحك الصحيح هنا
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async () => {
    try {
        if (!inp.value.trim()) {
            alert("يرجى إدخال وصف للصورة!");
            return;
        }

        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${api}`
            },
            body: JSON.stringify({
                "model": "dall-e-2",  // تحديد النموذج
                "prompt": inp.value,
                "n": 1,  // جرّب 1 بدلًا من 3 لتقليل الضغط على API
                "size": "1024x1024"
            })
        });

        console.log(response); // تحقق من استجابة السيرفر

        if (!response.ok) {
            const errorData = await response.json();
            console.error("API Error:", errorData);
            throw new Error(`HTTP Error! Status: ${response.status} - ${errorData.error?.message || "Unknown error"}`);
        }

        const data = await response.json();
        images.innerHTML = '';  // إزالة الصور القديمة
        const img = document.createElement("img");
        img.src = data.data[0].url;
        img.alt = "Generated Image";
        images.append(img);

    } catch (error) {
        console.error("Error fetching images:", error);
    }
};
