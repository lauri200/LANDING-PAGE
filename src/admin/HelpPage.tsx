export default function AdminHelpPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
        Guide administrateur
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        Formation courte pour gérer les candidatures et partenariats APTIC-R.
      </p>
      <section className="p-5 bg-white mb-4 space-y-3 text-sm leading-relaxed">
        <h2 className="font-semibold">1. Tableau de bord</h2>
        <p>Il montre l’entonnoir (candidatures → entretiens → accueil) et les visites du site. Les graphiques « par pays / langue / source » viennent des dossiers. Les compteurs « visiteurs » et clics viennent des événements analytics.</p>
      </section>
      <section className="p-5 bg-white mb-4 space-y-3 text-sm leading-relaxed">
        <h2 className="font-semibold">2. Candidatures</h2>
        <p>Filtrez par statut, pays, durée, compétence, langue, source. Ouvrez un dossier pour lire le profil, télécharger CV / lettre, changer le statut et écrire une note.</p>
        <p>Le bouton <strong>Enregistrer et prévenir</strong> envoie un email automatique à la personne. Pour un entretien, remplissez le bloc Rendez-vous (date, visio, lien) puis envoyez.</p>
      </section>
      <section className="p-5 bg-white mb-4 space-y-3 text-sm leading-relaxed">
        <h2 className="font-semibold">3. Statuts</h2>
        <p>Nouveau → Révision → Sélectionné → Entretien → Choisi → Validation partenaires → Préparation → Arrivé → Terminé. Refusé sort du parcours.</p>
      </section>
      <section className="p-5 bg-white mb-4 space-y-3 text-sm leading-relaxed">
        <h2 className="font-semibold">4. Partenaires</h2>
        <p>Même logique : lecture, statut, rendez-vous de discussion, email, export CSV.</p>
      </section>
      <section className="p-5 bg-white mb-4 space-y-3 text-sm leading-relaxed">
        <h2 className="font-semibold">5. Export</h2>
        <p>Le bouton Excel / CSV télécharge les dossiers filtrables dans un tableur (séparateur point-virgule, compatible Excel).</p>
      </section>
      <section className="p-5 bg-white space-y-3 text-sm leading-relaxed">
        <h2 className="font-semibold">6. Site public</h2>
        <p>Les visiteurs passent par Accueil → Mission → Éligibilité → Candidature. Pensez à exécuter aussi <code>supabase/analytics.sql</code> pour les KPI visiteurs, et à renseigner le logo, les réseaux et les montants d’accueil quand APTIC-R les aura validés.</p>
      </section>
    </div>
  );
}
