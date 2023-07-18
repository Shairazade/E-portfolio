import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez également ajouter ici un traitement des erreurs, par exemple un suivi d'erreurs ou un rapport d'erreurs à des services externes.
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez personnaliser l'affichage de l'erreur ici, par exemple afficher un message d'erreur ou une interface utilisateur alternative.
      return <h1>Une erreur s'est produite.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
