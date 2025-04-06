// 40 Tam Sual (20 İqtisadi + 20 Sosial)
const questions = [
    // İqtisadi (Sol=1-20)
    {question: "Dövlət əsas xidmətləri (səhiyyə, təhsil) pulsuz təmin etməlidir", axis: "economic", direction: "left"},
    {question: "Bazar iqtisadiyyatı ən səmərəli sistemdir", axis: "economic", direction: "right"},
    {question: "Zənginlər daha çox vergi verməlidir", axis: "economic", direction: "left"},
    {question: "Dövlət müəssisələri özəlləşdirilməlidir", axis: "economic", direction: "right"},
    {question: "İşçilər şirkətlərdə səs hüququna malik olmalıdır", axis: "economic", direction: "left"},
    {question: "Gömrük vergiləri minimuma endirilməlidir", axis: "economic", direction: "right"},
    {question: "Əsas infrastruktur layihələri dövlət tərəfindən həyata keçirilməlidir", axis: "economic", direction: "left"},
    {question: "Həmkarlar ittifaqları gücləndirilməlidir", axis: "economic", direction: "left"},
    {question: "Dövlət sənayeyə müdaxilə etməməlidir", axis: "economic", direction: "right"},
    {question: "Təqaüd sistemi dövlət tərəfindən təmin edilməlidir", axis: "economic", direction: "left"},
    {question: "İstehsal vasitələri fərdlərə məxsus olmalıdır", axis: "economic", direction: "right"},
    {question: "Torpaq özəlləşdirilməlidir", axis: "economic", direction: "right"},
    {question: "Banklar dövlət nəzarətində olmalıdır", axis: "economic", direction: "left"},
    {question: "İşsizlik müavinətləri artırılmalıdır", axis: "economic", direction: "left"},
    {question: "Dövlət tərəfindən təbliğat aparılmalıdır", axis: "economic", direction: "left"},
    {question: "İstehsalat dövlət tərəfindən planlaşdırılmalıdır", axis: "economic", direction: "left"},
    {question: "İşçilər öz iş yerlərini idarə etməlidir", axis: "economic", direction: "left"},
    {question: "Dövlət sənətkarlığı dəstəkləməlidir", axis: "economic", direction: "left"},
    {question: "Tibb işçiləri daha çox maaş almalıdır", axis: "economic", direction: "left"},
    {question: "İctimai nəqliyyat pulsuz olmalıdır", axis: "economic", direction: "left"},
    
    // Sosial (21-40)
    {question: "Hökumət şəxsi hüquqları ictimai təhlükəsizlik üçün məhdudlaşdıra bilər", axis: "social", direction: "authoritarian"},
    {question: "Cins azlıqları eyni hüquqlara malik olmalıdır", axis: "social", direction: "libertarian"},
    {question: "Əsgərlik məcburi olmalıdır", axis: "social", direction: "authoritarian"},
    {question: "Dövlət mətbuatı nəzarət etməlidir", axis: "social", direction: "authoritarian"},
    {question: "Narkotik maddələrin istifadəsi azad olmalıdır", axis: "social", direction: "libertarian"},
    {question: "Din dövlət işlərindən ayrı olmalıdır", axis: "social", direction: "libertarian"},
    {question: "Cinayətkarlara daha sərt cəzalar verilməlidir", axis: "social", direction: "authoritarian"},
    {question: "Silah sahibliyi məhdudlaşdırılmalıdır", axis: "social", direction: "authoritarian"},
    {question: "Hər kəs öz bədəni haqqında özü qərar verməlidir", axis: "social", direction: "libertarian"},
    {question: "Milli mədəniyyət qorunmalıdır", axis: "social", direction: "authoritarian"},
    {question: "Həbsxanalar islah üçün deyil, cəza üçün olmalıdır", axis: "social", direction: "authoritarian"},
    {question: "İmmiqrantlar üçün daha sərt qaydalar tətbiq edilməlidir", axis: "social", direction: "authoritarian"},
    {question: "Həyat hüququ hər şeydən üstün olmalıdır", axis: "social", direction: "libertarian"},
    {question: "Dövlət sənətkarlığı dəstəkləməlidir", axis: "social", direction: "authoritarian"},
    {question: "Uşaq baxçası dövlət tərəfindən təmin edilməlidir", axis: "social", direction: "authoritarian"},
    {question: "Dövlət təhsil proqramlarını tənzimləməlidir", axis: "social", direction: "authoritarian"},
    {question: "Hər kəs öz ailə qurumunu seçməkdə azad olmalıdır", axis: "social", direction: "libertarian"},
    {question: "Milli təhlükəsizlik üçün şəxsi məlumatlar toplanmalıdır", axis: "social", direction: "authoritarian"},
    {question: "Dövlət vətəndaşların şəxsi həyatına qarışmamalıdır", axis: "social", direction: "libertarian"},
    {question: "Dövlət dinə müdaxilə etməməlidir", axis: "social", direction: "libertarian"}
];

// ... (keep all other existing JavaScript code the same) ...

// Add certificate generation function at the bottom
document.getElementById('generate-certificate').addEventListener('click', generateCertificate);

function generateCertificate() {
    const userName = document.getElementById('user-name').value.trim();
    if (!userName) {
        alert('Zəhmət olmasa adınızı daxil edin!');
        return;
    }

    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 848;

    // Design certificate
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#e63946';
    ctx.lineWidth = 15;
    ctx.strokeRect(50, 50, canvas.width-100, canvas.height-100);
    
    // Header
    ctx.fillStyle = '#1d3557';
    ctx.font = 'bold 40px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SİYASİ PUSULA TESTİ NƏTİCƏ SERTİFİKATI', canvas.width/2, 150);
    
    // User name
    ctx.fillStyle = '#e63946';
    ctx.font = 'bold 60px "Inter", sans-serif';
    ctx.fillText(userName.toUpperCase(), canvas.width/2, 280);
    
    // Result
    ctx.fillStyle = '#212529';
    ctx.font = '30px "Inter", sans-serif';
    ctx.fillText('Siyasi Mövqeyiniz:', canvas.width/2, 350);
    ctx.fillStyle = '#e63946';
    ctx.font = 'bold 48px "Inter", sans-serif';
    ctx.fillText(document.getElementById('result-title').textContent, canvas.width/2, 420);
    
    // Capture compass
    const compass = document.getElementById('compass');
    const marker = document.getElementById('marker');
    const originalDisplay = marker.style.display;
    marker.style.display = 'block';
    
    html2canvas(compass, {
        backgroundColor: null,
        scale: 2
    }).then(compassCanvas => {
        ctx.drawImage(compassCanvas, canvas.width/2 - 200, 450, 400, 400);
        marker.style.display = originalDisplay;
        
        // Footer
        ctx.fillStyle = '#6c757d';
        ctx.font = '20px "Inter", sans-serif';
        ctx.fillText('Test tarixi: ' + new Date().toLocaleDateString('az-AZ'), canvas.width/2, 900);
        ctx.font = '16px "Inter", sans-serif';
        ctx.fillText('by zectted • siyasipusula.az', canvas.width/2, 930);
        
        // Download
        const link = document.createElement('a');
        link.download = `Siyasi_Pusula_${userName.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
